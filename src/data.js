export const chapters=[
{id:'01',title:'边界',en:'THE EDGE OF THE KNOWN',quote:'你所知道的世界，真的就是全部吗？',region:'南极点 · 已知世界边缘',coord:'90°00′S / UNDEFINED',type:'cloud',note:'测绘终止于此。探索，从这里开始。',hint:'点击巨环观测点，读取冰下异常'},
{id:'02',title:'被删除的地图',en:'THE FORBIDDEN CARTOGRAPHY',quote:'所有地图，都在同一个地方停止。',region:'第七测绘局 · 限制档案',coord:'ARCHIVE / CT-002',type:'depth',note:'这不是遗漏。每一份原始记录，都在同一圈纬线被人为抹除。',hint:'点击地图中心，解除遮蔽'},
{id:'03',title:'环极冰幕',en:'THE POLAR VEIL',quote:'我们曾以为，这是世界的尽头。',region:'环极冰幕 · 裂隙 07',coord:'ALTITUDE / 8,400 M',type:'portal',note:'冰层深处的光，不来自我们这一侧的天空。',hint:'点击冰幕裂隙，探测内部信号'},
{id:'04',title:'第七远征队',en:'EXPEDITION VII',quote:'第七远征队，已失去联系。',region:'界外海域 · 最后通讯点',coord:'LAST SIGNAL / 2089.11.07',type:'wave',note:'「如果你们听见第三次汽笛，请不要派船来。」——最后一段可辨认的录音',hint:'点击风暴，捕捉闪电中的轮廓'},
{id:'05',title:'无日之海',en:'THE SUNLESS SEA',quote:'这里的海洋，从未见过太阳。',region:'无日之海 · 深度未知',coord:'SOLAR ACTIVITY / NONE',type:'rise',note:'水下的荧光每隔十一秒熄灭一次。像是某种呼吸。',hint:'点击海面，投放声呐脉冲'},
{id:'06',title:'倒悬群岛',en:'THE INVERTED ISLES',quote:'在这里，连大地都拒绝服从引力。',region:'倒悬群岛 · 上升气流区',coord:'GRAVITY / UNRESOLVED',type:'fog',note:'瀑布流向天空。我们放开的第一块石头，至今没有落地。',hint:'点击悬岛，读取测绘记录'},
{id:'07',title:'低语之森',en:'THE WHISPERING FOREST',quote:'不要回应森林里的第二个回声。',region:'低语之森 · 外围石阶',coord:'BIO-SIGNAL / ACTIVE',type:'push',note:'这里的树没有年轮。切片里只有不断重复的同一个符号。',hint:'点击林间微光，监听第一回声'},
{id:'08',title:'苍白遗城',en:'THE PALE RUINS',quote:'在我们学会书写之前，有人已经遗忘了整个文明。',region:'苍白遗城 · 无名中庭',coord:'CIVILIZATION / UNDATED',type:'portal',note:'所有门都朝向同一个方向。但那个方向，并不存在于我们的罗盘上。',hint:'点击圆形石门，读取残缺铭文'},
{id:'09',title:'观测者',en:'THE OBSERVER',quote:'当你凝视未知，未知也正在记录你。',region:'观测禁区 · 位置已隐去',coord:'OBSERVER / UNKNOWN',type:'pull',note:'我们撤回了「山脉」这个命名。它刚才，改变了位置。',hint:'移动光标，观察远处结构的响应'},
{id:'10',title:'世界远未结束',en:'THE WORLD BEYOND',quote:'我们抵达的，从来不是终点。',region:'界外档案馆 · 第一期',coord:'MAPPED / 0.0037%',type:'pull',note:'THE UNKNOWN IS INFINITE. 未知没有尽头。',hint:'选择档案分类，继续探索'}];
export const categories=['未知大陆','异常生物','失落文明','远征记录','禁忌区域'];
export const categoryEnglish=['UNKNOWN LANDS','ANOMALOUS LIFE','LOST CIVILIZATIONS','EXPEDITION LOGS','FORBIDDEN ZONES'];
export const archives=categories.flatMap((category,i)=>[0,1].map((v)=>({id:`OA-${i+1}0${v+1}`,title:[['无日海盆','逆流石群'],['脉光水母','第二回声'],['无名中庭','朝内的门'],['第七队航海日志','冰幕采样记录'],['静默经线','观测者禁区']][i][v],subtitle:categoryEnglish[i],category,region:chapters[[4,6,7,3,8][i]].region,description:[['海水吸收了所有可见光，只有深处的生物留下断续脉冲。探针在六千米处仍未触底。','碎石以每小时三厘米的速度上升。其表面的盐分与无日海样本一致。'],['没有观察到摄食器官。荧光却会对船上人员的心率产生同步响应。','声谱分析显示，第二个回声先于第一个回声出现。请勿开展模仿实验。'],['石柱间距为人类步幅的四十七倍。没有发现任何符合人类尺度的入口。','译码失败。重复出现的图形可能不是文字，而是某种空间坐标。'],['2089.11.07，气压稳定，海面无风。船载罗盘同时指向水下。通讯于03:17中断。','样本在恒温容器中继续降温。封存前，内部出现了不属于冰晶的规则结构。'],['越过此线后，一切无线电信号都会在十二秒后以原声返回。','该区域暂停命名、测距及主动照明。所有现存图像仅保留局部。']][i][v],images:[],discoveryDate:`2089.11.${String(7+i+v).padStart(2,'0')}`,dangerLevel:[3,4,2,3,5][i],relatedArchives:[`OA-${i+1}0${v?1:2}`]})));

