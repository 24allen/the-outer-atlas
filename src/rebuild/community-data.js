export const REPO='https://github.com/24allen/the-outer-atlas';
export const API='https://api.github.com/repos/24allen/the-outer-atlas/issues';
export const TYPES=['地域','生物','文明','异常','世界观'];
export const FIELDS=[['world','所属世界 / 分支'],['summary','概述'],['discovery','值得前往的发现'],['cost','异常与代价'],['mystery','尚未回答的问题'],['connection','关联档案'],['content','完整记录']];
export const emptyDraft=()=>({title:'',type:'地域',world:'界外 · 独立分支',summary:'',discovery:'',cost:'',mystery:'',connection:'',content:''});
export function issueBody(d){return ['<!-- outer-atlas-community:v1 -->','### 类型',d.type,...FIELDS.flatMap(([key,label])=>[`### ${label}`,d[key]?.trim()||'未记录']),'---','原创共创投稿。保留作者署名；衍生或转载请先征得作者同意。社区设定不自动成为主线正史。'].join('\n\n')}
export function issueUrl(d){return `${REPO}/issues/new?${new URLSearchParams({title:`[共创/${d.type}] ${d.title.trim()}`,body:issueBody(d)})}`}
export function parseIssue(issue){
 if(issue.pull_request||issue.state==='closed'||!issue.body?.includes('<!-- outer-atlas-community:v1 -->')||issue.labels?.some(l=>['hidden','spam'].includes(typeof l==='string'?l:l.name)))return null;
 const section=label=>{const prefix=`### ${label}\n`;const body=issue.body.replaceAll('\r\n','\n');const start=body.indexOf(prefix);return start<0?'':body.slice(start+prefix.length).split(/\n### |\n---/)[0].trim()};
 return {id:String(issue.number),title:issue.title.replace(/^\[共创\/[^\]]+\]\s*/,''),type:TYPES.includes(section('类型'))?section('类型'):'世界观',...Object.fromEntries(FIELDS.map(([key,label])=>[key,section(label)])),author:issue.user?.login||'未知记录者',url:`${REPO}/issues/${issue.number}`,date:issue.created_at?.slice(0,10),status:issue.labels?.some(l=>(typeof l==='string'?l:l.name)==='canon')?'编辑收录':'开放设定'};
}
export const examples=[{...emptyDraft(),id:'example-tide',title:'退潮之后的第二片海',type:'地域',world:'界外 · 潮间支线',summary:'每逢退潮，海床下方会露出一片倒映陌生星空的水面。',discovery:'盐壳之间的淡水可以保存种子。远征队第一次在无日地带培育出了幼芽。',cost:'取水者的影子会留在岸边，直至下一次涨潮。第三次取水的人没有回来。',mystery:'倒影中的船，为什么比我们的船早一天抵达？',connection:'主线第五章：无日之海',content:'我们用绳索标记了两层海面的高差。\n翌日，所有绳结都出现在水下；绳索本身仍是干的。\n队长决定沿盐壳向东寻找没有倒影的岸。',author:'界外编辑部',status:'创作示例',date:'',url:null},{...emptyDraft(),id:'example-walker',title:'负碑者',type:'生物',world:'界外 · 苔原支线',summary:'平原上的石碑会在夜间改变位置。地面上没有拖行的痕迹。',discovery:'跟随石碑迁移，可以绕开会吞没声音的低洼地。',cost:'石碑停留过的地方，植物会开出没有花粉的白花。',mystery:'碑文记录的是过去的灾难，还是尚未出生的名字？',connection:'可关联你创作的湿地或古文明',content:'我们以为那是风化的纪念碑。\n直到雾散后，看见石面之下细长的关节。\n没有人看清它抬脚的瞬间。',author:'界外编辑部',status:'创作示例',date:'',url:null}];
