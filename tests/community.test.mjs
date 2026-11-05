import test from 'node:test';
import assert from 'node:assert/strict';
import {emptyDraft,issueBody,issueUrl,parseIssue} from '../src/rebuild/community-data.js';
const draft={...emptyDraft(),title:'潮汐 & 未知',type:'生物',summary:'<script>alert(1)</script>',discovery:'盐中有花',cost:'影子消失',mystery:'谁在等待？',content:'第一行\n第二行'};
const issue={number:42,title:`[共创/生物] ${draft.title}`,body:issueBody(draft),state:'open',user:{login:'writer'},labels:[],created_at:'2026-11-05T00:00:00Z'};
test('publishing URL preserves Unicode, reserved characters and the public marker',()=>{const u=new URL(issueUrl(draft));assert.equal(u.origin,'https://github.com');assert.equal(u.searchParams.get('body'),issueBody(draft));assert.equal(u.searchParams.get('title'),issue.title)});
test('read public record with author attribution and literal untrusted text',()=>{const record=parseIssue(issue);assert.equal(record.title,draft.title);assert.equal(record.summary,draft.summary);assert.equal(record.content,draft.content);assert.equal(record.author,'writer');assert.equal(record.status,'开放设定');assert.equal(record.url,'https://github.com/24allen/the-outer-atlas/issues/42')});
test('moderation excludes closed, hidden, spam and non-community submissions',()=>{for(const changes of [{state:'closed'},{labels:[{name:'hidden'}]},{labels:['spam']},{pull_request:{}},{body:'bug report'}])assert.equal(parseIssue({...issue,...changes}),null);assert.equal(parseIssue({...issue,labels:[{name:'canon'}]}).status,'编辑收录')});
test('CRLF edits preserve archive fields',()=>assert.equal(parseIssue({...issue,body:issue.body.replaceAll('\n','\r\n')}).mystery,draft.mystery));
