function r(r,e){return r[e]=1,r}function FindProxyForURL(r,a){if(isPlainHostName(a))return t;var u=a,o=0;do{if(n.hasOwnProperty(u))return e;if(i.hasOwnProperty(u))return t;o=a.indexOf(".",o)+1,u=a.substring(o)}while(o>0);var f=dnsResolve(a);if(!f)return e;if(f.indexOf(":")>=0)return t;var d=f.split("."),l=(255&d[1])<<8|255&d[2],c=d[0],h=_[c],p=s[c];if(""===h)return e;if("10"===p)return t;var v=0,w=h.length,L=w>>1;do h[L].charCodeAt(0)>l?w=L:v=L,L=v+w>>1;while(w>v+1);return l-h[v].charCodeAt(0)>>parseInt(p[v],16)===0?t:e}var e="SOCKS5 127.0.0.1:1080",t="DIRECT",i="qbox.me|ele.me|lan|cn|bilibili.tv|acfun.tv|local|bilibili.us|zhi.hu|sf.gg|iapps.im|gitcafe.io|coding.io|ali213.net|bdwm.net|themex.net|coding.net|126.net|alipay.com|tmall.com|elemecdn.com|miui.com|alicdn.com|netease.com|taobaocdn.com|acgvideo.com|weibo.com|bilibili.com|cnzz.com|gamersky.com|gitcafe.com|zhihu.com|baidu.com|upaiyun.com|zhimg.com|letvcdn.com|bdstatic.com|qiniucdn.com|163.com|ykimg.com|mi.com|segmentfault.com|youku.com|tiebaimg.com|taobao.com|clouddn.com|localhost".split("|").reduce(r,{}),n="fb.me|booklink.me|youtu.be|akamaitechnologies.fr|t.co|g.co|github.io|wikinews.org|google.org|gwtproject.org|wikimedia.org|wiktionary.org|wikipedia.org|wikivoyage.org|golang.org|mediawiki.org|wikiversity.org|wordpress.org|webmproject.org|wikisource.org|wikimediafoundation.org|wikidata.org|wikibooks.org|chromium.org|polymer-project.org|wikiquote.org|fbcdn.net|akam.net|akamaihd.net|sstatic.net|adzerk.net|akadns.net|akamaitech.net|srip.net|akamaiedge.net|cloudfront.net|akamaistream.net|tfbnw.net|azurewebsites.net|typekit.net|facebook.net|akamai.net|fastly.net|edgekey.net|googlezip.net|edgesuite.net|goo.gl|googlecode.com|googlesource.com|google.com|apple.com|thefacebook.com|googlehosted.com|youtube.com|twitter.com|googlelabs.com|gstatic.com|googlevideo.com|yimg.com|akamaitechnologies.com|twitpic.com|twimg.com|gmail.com|googleadservices.com|gmodules.com|withgoogle.com|chrome.com|androidify.com|googleapis.com|youtube-nocookie.com|wordpress.com|dropboxforum.com|blogger.com|blogspot.com|android.com|flickr.com|tieba.baidu.com|githubusercontent.com|googlesyndication.com|staticflickr.com|mzstatic.com|tweetdeck.com|tinypic.com|yahoo.com|googlemail.com|facebook.com|appspot.com|wp.com|dropbox.com|amazonaws.com|googledrive.com|panoramio.com|ggpht.com|stackoverflow.com|googleusercontent.com|github.com|dropboxstatic.com|dropboxusercontent.com|dmm.com|ytimg.com|gravatar.com|keyhole.com|google-analytics.com|feedburner.com|pushbullet.com".split("|").reduce(r,{}),_="  ĀĂĢĲĺľȀȂȄɄɤɴɼ̀Ёсѡѱѹѽѿࠀ਀ਈ਋ੋ੫੻੿ఀ᠀ⴀ　㠀䐀倀琀됀렀밀쐀쨀츀  Āက暀暜最眀缀舀蘀退쀼쁌쐀찀퀀ࠀ᠀⋨␀Ⰰ㈨㊀㙈㚘㛀拐拰掀最檀櫌洠瀀灐熀猀琬祈祸耀菜退鐀鰀렀��� ĈƈǈǨǸЀက ␀─┤┧┷┿⠀　㌀㠀怀︀ Ââòúþ䀀怀栀氀耀  ĀĠİĸƀЀ　㠀㸀㺀㺠㺴㺼㼀倀區卐単存彘忘忸恀恠恬慬懬懼挀捀捠捰捸搀砀稀笀笤箤篤篴篼耀鰀鰤갤됤려먤묤뭤뭴뮀쀀준쨀切︀豈龜落兩濾戀裂令燎溺宅兀﨔靖﨤煮褐並婢敖猪直練靖䀹﫜﫬﫴ﬄ﬌﬐ﬤﭴ﯀ﯨﯴﰨﰰﰸﳠ︀︈︘︬︤︴﹀﹈﹔﹜﹤ﹰﺀﺈﺘﺨﺴﻄﻐﻜﻬﻸ（０Ｐ＼ｌｔ｠ｬﾐﾨﾰﾸ￀￈￠￨￴䁰炄炼烐烤烬焌焜焨焴煈煬熐熨熰熸燈燘燤燰燼爌爠爨爴牠牨犈狄狤独狼猬獤獸玄玐玜玤珈珔珤珬珴琌琠琴琼瑠璌璘瓐甈甔用畄畼痼眴眼睨睴瞠矨硤碌碜碤磜磰礔礴祀祈祜票禬秔称稐稠稨稼穜穬穴窠竀竐竘笜笤第筌筸简箈箔箜箤箴篌篔篠簀簔簜簤簬籄籌籤籼粬糐糸紌紘素紬紴経綈縰繤繬绔络缈缤罠罴罼羐羜翘尀簀Ѐ㌀㜀䀀瀀砀耀耂谀頀퀀������฀ᘀḀ㸀䇨䈀䒀刀匀址掀斀琀耀退騀쀀 䀀倀欀漀需鬀가뼀뿰￰ 㜀㼀ꀀ숀저���ﰀﶀ＀ѐҰࢠᰀᶀⶀⷠ⾀　埀耀 ĀʬЀက　㈸㐀㕤㘀㟠䀀䠀䰀一丠倀怀怈怐悀捠敀敤敦敶敾晀晤晦晨晸栀湀湠湴湼砀簀縀耀耈耨耸脀蔀蜀退쀀저쮀쮠쮬쮼찀ﬀ﬈ﴈ︈ﺈﻈﻨﻸĈĔňŘƨɬʜʤˈ͔ʹ΄ΌΔΜиҨҸԤԴ׼ٌۜ܄ܜߔߜࠄࠠ࠴࡬࢜ࣈࣜईঘ৸਀ਐ੔੯ઌழఠౄಈಸ೨ർඐහ෴๔๰ຄຜ໰༄༐འ࿈ဴၐၘၬၼᄨᅸᆠᇌᇤዀዐዠጌጨፀፈᏨᐌᐠᑰᒀᒠᓸᕰᖈᖰᗐᗰᘀᙀᙤᙴᙼᚼᛤ᛼ᜈ᜸ហឰ៤ᡴᢀᢐᢰᢸᣜᣤ᣸ᤈᤔᤤᤰ᥀ᦔᦜ᧘ᨀᩀ᪜᫤᫰ᬄᬌᬘᬸ᭠ᯐᯰᰄ᳌ᴐᶀᶈḔṠẔỈỤỬἀἰὀᾔᾠᾨῈ ∀⌀⌠⌰⍨⍴⏈⏜␔␜␤␸⑀⑈①⒄⒠ⓠ⓰─┌┘┬┴╈╤╼█▬◐◸☀☠☨☸♌♔♜♴⚄⚌⛜⛼✐❀❘❤❬➐➠⟈⟨⠌⠬⡘⡤⡰⣀⣔⣜⣤⤐⤴⥴⦌⦔⦠⧜⨈⨘⨠⩀⩌⩨⪴⫨⬐⬘⭔⭠⭨⭼⮄⮤⮸⯀⯐⯜⯨⯰ⰸⱐⱘⱸⲄⲐⲘⲨⲰⳠⳬ⴬ⴼⵈⷈⷘⷠⷸ⸀⸌⺘⻴⼄⼔⼤⼰⽐⽠⽬⽴⾈⿈⿔⿜⿸〔〴ぜゐナヘㄌㄔㅈㅜㅬㆀㆰ㇄ㇸ㈤㈬㉬㉼㊄㊌㊬㋜㐨㑈㑠㑨㒠㒬㒸㓄㔄㕀㕜㕤㕼㖌㖠㖴㗌㗘㗬㗸㘈㘰㘼㚠㛔㛤㛰㜘㝐㝸㞘㞬㟌㟤㟬㠈㠐㠠㠴㠼㡈㡤㢌㢘㢸㣈㣘㤌㤴㥌㥬㦈㧄㨘㪶㭌㭤㭰㮀㮔㮤㯘㰠㰬㲤㳤㳬㴼㵨㶌㶘㶠㶬㶸㸘㸴㹈㹘㹠㺀㺜㺼㻌㻜㼠㽀㽐㽘㾌㾘㾠㾰㾸㿀㿐㿰쀀쀰쀸쁔삀삐삤삼샐샘샼섨셸소솔솠솼쇔숐싦써썰쎈쎔쎠쏀쐼쑈쑘쑠쒨쒸쓌奈老呂麗戀捻寮林識蘒難塚華變齃﫠﫬﫸ﬠﭔﭠﭼﮠ﯌ﯬﰜﰤﱀﱨﲬﳌﳨﳸﴄﴼ﷌﷜﷨︈︔﹀ﹰﺰﺼﻄﻜｄｘﾈﾸ￈￐￤ @Ȁ଀⬀㐀㰀䨀倀氀簀؀က⠀Ⲑ　㌀㔀㠀䀀䠀䬀䰀䲜䲸䳀䵀倀堀崠帀縀頀鰀ꔠꘀ곀관괠굀귀뀀퀀 䈀䏀䑀䠀唀寀瀀琀盈着瞀砀簀縀鸀ꘀꨀ가됀먀쀀퀀��������������� 䀀䤀䬀倀怀涀漀猀甀稀舀萀褰쀀 ࠀீఀကሀ᠀ἀⰀ㒠㘀㨀㬀㯠㸀縀艠艰萀谀숀앤저쨀찀큠텠퇠퐀푤풸픀혀���切ᰀ㘀㰀䐀佀倀怀栀渀湀漀澠瀀萀蜀言赀趀쐀웸퀀᠀ᰀ Ⰰ㰀䕀吀哀嗀搀砀簐鐀鰀Ꙁꠀ됀븀���Āऀ଀ഀက㈀㐀㠀㪀㫐㰀䈀䔀䘀䰀唀妐婐媸开瀀琀耀쀀섐섰솰숀쐀였윀잀찀케팀풠핀헀혠홀횀������נּﰀﺀﾀࠀᔀ─ⴀ　㔰㖰㤀㨀㬀䌀䜀䤀䩀䪀媀庀往搀朐木杈枀梨樀瀀础祀秀窀簀밀᠀ᨀᰀ䀀䈀䍰䠀倀吀堠夠妠姠寰昐映瀀砀簀縀羀萀退눀됀렀먀밀븀였쨀츀퐀ﰀ Ȁʀڀࢀ਀ྈကዀዐዠᛠ០ᭀᵀ᷀Ḱ῀ ⠀⡀⢀⦀⨀⪀⫠Ⰰ　㤀㮀㶀㺀㼠䯐一倀勐吀怀氀瀀退钠韀ꃈꆀꖀꞀ뀀ﱠﳰ ᠀Ḁ⸀㐀䀀䠠䢀䰀吀堈娀尀帀耀袀褀辀쀀Ѐࠀ⠀⸀⺀むㆀ㈈㌀㒠㓐㓰㚰㜀㠀㨀㪈㬀㼀䐀䰀侀夀撀攀旐쀀죀준찀＀@ÀЀࠀ਀଀ఀ฀　㄀㌀䀀怀昀晀瀀眀聸蠀邀飀鰀밀였졀줰찀｀Ѐఀㆀ㊠㐀㰀㸀䀀怀戀掀搀攀最沀泐瀀耀衐褀謀退뀼끐넀뤀봀뼀쐀잀츀豈ﴀـ฀᐀᳀ᵀἀ⡰⢰⣐⨀⼀䀀䈀䌀䬀伀堀氈氨浠瀀縀蘀鎀需鰀ꀀ가쀀쐀저���豈ﬀ︀῀⿀㪀㶀㸀䀀怀戀栀砀꤀꬀퀀툀픀홠휀���ﺀ ऀ脀鐀鬀鼀ꨀ뀀뜀먀봀쐀퐀���󐄀䬀輀촀케툀豈＀ ܀ఀ㐀笀＀ 猀礀膈膘臀臘臼言���＀梀 ̀∀挀攀瘀 ሀ㴀稀鐀鰀＀케椀 ⼄㔀㔤㕘㕸㖈㖠㖼㗜㗰紀踀넀대찀漀謀봀���ꀀ︀ࠀ∀⨀⸀倀栀砀퀀က က᠀Ḁ⨀Ⰰ⸀一帀昀檀鈀騀ꀀ눀뢀뤀봀뼀䰀吀嘀堀常幠往羀膀芀蠀鐐钘铘铸門隠頀ꠀ닀렀밀붔주쫼쯼퀀틠퐀������Ⴠሀីៈ だ㄀㈀㉰㌀㘀㴀倀堀尀怀耀退鴀ꁀ글저︀ 䀀亴冴吀宀守官尀耀ꀀꠀꨀ가똀렀 塣粚ꠀ벪ሀ㍤dz°΀ҀӼ؆قوٜٗٙ٧٬ٮٲڰࠀࠂࠌ࠘ࡍࢀࣀठढरळहऻੀఁ఑ఓై౔ౠౢ౪౯౴เๅ้๎๘๡๨๬๯๲๶๼๿ກງຕທຝຟຩຫະຸ໐໕໛ໞ໡໣໧໫໯໶໻ᑂᑏᑗᑞᑲᑵᑸᑽᑿᖃᖍᖓᖖᖚᖜᛸᮈ☀☈☰♰⚀⚈⚊⚌⚒⚕⚞⚤⚰⚸⛸⠄⠇⠏⢇⢌⢏⢑⢖⢛⢞⢢⤈⤋⤍⦀⦂⦘⧀⧰⭌⮐ⰐⱃⱊⲁⲄⲒⴀⴂⴏⴟ⸐⸒⸔⸠⺀⻠⽒⽾⾀⾂㧰㨀㬀㯔㯨㯬㰰㱠㱰㲄㲔㲜㹰㻸㻼㻿㽑㽙㽝㽟㾠㿸䄀䄈䌀䔄䔐䘀䙠䛀䠨䡐䦀䨈䩐䫾䯐䯼䳼䵐䵜丈俠俸僀儀叼同吐吘嗐囹囼坐夈姨娀婰嫄嫠嬀孠宀宰寠尀專尰峼巼幜开忰忼濼矼秼稄稠穀穰窀窄筠筴簐簘絰綰缀缌缜缨缸罰羐羠翀翐翔翴翼舀苠茐茰菐蔠蘺蚀蠰裐觧趠踐輄輐輸銠銼鋄鋌鎐鐠鑀锠閠闠阐阸雀雠需鞀颰餀餰鷀麠ꂰꉃꉋꐀꑠꕠꖰꗐꗯꗱꗳꗵꗻꗿꛠꢠꪀ꫘꫸ꯘ꯫가관괈군굸균김냠돰뒀듐땰똠뛀봀뵐붸뼀뽄뽔뽜쀀\n*-/QSZ`hqsz±àĄĒĚŁŃņŌŚšťŧŬǽɀɉɰɾʌʖʘʜʠʴ˄ˑ˖ˢ˥ˬ͈̈́͋͐ͩ͠Ͱ͸ͻ·΋Ώ҄҆җқҮҴҺӍӐӣӦԄԇԉԋԕԬԮԴԸԼղնոִֶֹּ֬־׃זךڃڈڊڎږڝڟ۠۸ށފޓޖޞ߀߈ࠀࠈࠗࠟࡆࡒࡖ࡛࡮ࡳࢦࢩࢭࢸࢺࢾࣀࣅࣇ࣑࣋ࣕࣗࣙࣜठतहिुॆैो्ॠ।६ঞਢਸ੊੔੘੟੽୆ୌ୒୔୤୭୵୺୾ஈ஍ஏழௐఐఓఘహుె౗౟౤౧౲౶ಂಉೄೌ೓೛ೢ೰ഒഘബ൐൘൜ත෠෣෩ธมุ฽๨๲๶ຢຸເໂ໖໧໶ༀ༔༖བྷཙཀྵ཰ྂྕྗྜྮ࿣࿨࿰࿶ညဌတရဦေဳ်ႅႡႺფხჰჵᄂᄒᄜᄧᄸᅊᅘᆈᆤᆻᆾᇧᇩᇸᇿሂሄሇሟሥሰሴቈቐ቗ቤቩቫቮኁኃኅነኙ዇ዐዓ዗ጒጘጞጠጩጬጮጺጼፀፄፈ፥፯ᎃᎅ᎐᎕᎜ᎰᎲᏐᏤᏩᏲᏸ᏿ᐑᐨᐰᐽᑁᑔᑙᑪᑳᑵᑷᑺᑾᒇᒏᒖᓦᓨᓬᔀᔂᔈᔊᔒᔡᔩᔬᕄᕒᕠᕼᖈᖑᗎᘘᘜᘟᙄᙌᙎᙔᙗᙜᙣᙪᙺᚃᚣᚦᚪᚰᛂᛲᛵ᛼ᜀᜯ᜽᜿ᝉ᝕᝜ᝢᝫᝰគឌឬាឺៀៅ៌០២៦៹៻᠍᠒᠛ᠫᠸᠺᡃᡊᡏᡑᡔᡖᡚᡯᡴ᡺ᢑᢘᢝᢡᢧᢺᣇᣊᣔᣙᣛᣴᤓᤕ᤮ᤰ᥀ᥛᥣᥪᦃᦇᦊᦓᦙᦛᦤᦦ᦮ᦴᦶᦿᧇ᧊᧐᧥᧫᧲ᨌᨢᨱᨷᨹᨼᩁᩄᩌᩐᩔᩡᩦᩳ᪁᪏᪔᪚᪞᪪᪭᪹᫊᪰᫒᫖᫞᫠᫤᫨ᬀᬊᬏᬔᬖᬨᬭᬵᭁ᭑᭘᭦᭭᭵᭹᭻᭽ᯈᯊᯩᯱ᯺ᰊᰌᰡᰣᰫᰶ᰸᱉᱌᱖᱘ᱰᲃᲈ᲌ᲑᲥᲩᲲᲹ᲻᳄᳢ᳯᴂᴈᴍᴜᴮᴹᴽᴿᵅᵉᵑᵚᵟᵤᵧᵰᵸᶶᶻᶽ᷸᷒ᷙᷣᷧᷩ᷾᷍ḐḙḛḝṂṑṗṯṹṻẘẜẢậắẻỂộỜỞỨừỰỶỺἭἱἳἶὅὈὐὕὡὩὬὼᾢᾮᾱ᾵Ά᾽ῌ῜῞ῡῥῸ´—‰‸‼‾⁄⁌⁑⁔ ⁦⁩₂₅₌ₘ₺⃀⃄⃋⃍⃔℄ℇℏℕℚ℠ℿ⅃ⅉ⅏ⅤⅺↁↃ↑↜↞↮↹⇈⇊⇌⇎⇖⇠⇢⇩⇳⇺∄∕∛∧∰∶∸≃≅≌≜≪≱⊓⊖⊘⊡⊻⋀⋌⋨⋰⋲⋵⋻㜂㜄㜊㜍㜖㜞㝝㝥㝭㝴㝷㞀㞒㟀㟄㟚㟝㟠㠁㠄㠌㠘㠦㠨㠮㠰㡄㡒㡟㡮㡹㢡㢩㢬㢯㢷㢹㢻㣀㣆㣉㣐㣒㣖㣘㣣㣨㣰㣼㣾㤅㤌㤜㤧㤮㤺㤽㥂㥅㥇㥉㥚㥥㥭㥻㦝㧈㧊㧎㧞㧠㧶㧹㧽㧿㸂㺃㺋㺡㻅㻤㻪㻶䲠䲨䶴丰伀传倄倠倹傄傔傜儀儐刀刐匀匸叠嘀图堠壀夀夈妈娀娈媀嫀嬠孠學尀岠崀帀开彠徠忠挈挘捐搠搰搿摐摰擀栠楠欀溠滐滨滪狴盀盱相眘眠睐睕睱矱矹矽矿耠聠胠脈舠萠蛰蝠螠軠遠鄀鐀鑀鑐鑖镜顀颀餀鳀鸐ꁨꂁꃀꄀꆴꇀꚠꠀ꨺꬀ꯠ긄긇깠꾀꿀끀남롐뮠봀봆뵰뷀빠뻹뼀뼐뽀뾐쀀쇠쉸썀썰쎀쐀쫬쵀춀콀쿀퀀퀐퀠퇠퐀푐ퟨ���������ȀԀԸրఀเ๰཰ྰႀᔀᜠᤀ⤀ⴀ⼀㌀㔀㣀䠀䰀一佀俠刀垀맀쁠䀀倀怀蠀 㠀堀怀摘擘擸栀氀맀맰쀀豈䠀刀厀耀���旀瀀颀騀ꀀ쀀ﰀ ࠀఀಀഀༀ稀肀芀莀藠蠀가됀쀀쐀였윀잀쟀쟠က倀紀纀耀ꀀꠀ저��� ᐀᮸䀀怀瀀琀砀耀退ꀀꘀ쀀였준쬀퀀������ﲀ︀＀￬￼                                ".split(""),s="10.103505432110654328654321083165420ab8abacaa9baa9.........10....322c22cb899c2299c.............cb3ba3733654786256467233928badba.........2876543aca851430b98bfa8...07654321dba8e...2425754327aba754328942ba75353874265423a98576432c5cba986437b7da98ba9.222332223222422222322325264326435643255226422333222222222223253322322225245549854233223322462532242242252343434324322322324222232222326522233224233462222263252323222343222232322432323223222321222322222322222223233243343243422242222222224322..1224324223223222432232222222322222222222322343233222222222242222222222223232325432543254323254232324322522322232232333223523242232223322..da..aa8dba019aaaa665.....9....bad939778697ab89dc.dcaa878a7e4.d88d9cb9878878.44477646b6ea9a........................................222ad928283ba925c324755043151043a5432a982543a98cb95342ab93542ba929876543..2322222245432322222322222323222232223222022222222222223223222232222222223223322222222332226543222222322222222231432322222322222222232232222222243222298542222222232223643232232325343223222322242222322552522222225222233423232222222322222323222223222252642743222753223222233222222241522332232225423255243233222322432232222223222222223232323233222222322222122422222222222232332242535343543232432424532542223223332235212223223232222322422232222222322232222222222233222232232232322233232222222222222232222233432227322225322264353232235223322332332222222222223232223232222222224321222022233323322212222222322222432222222222322232232222232222232224222022332232...043216bdbba9ccac....9aa4898b99862276ba5d9a95965465dca59c.e845b85a9365a8db98ba9cb08722b552.ea98cb7a98b983ad.b95a98a8b5a872ea43ba9298a87562379d9.89b86cba4655b8893693dc.a9aca4656ba4ba5badc9.33b988c4a944a787a84438a9e8543988759a847654a87cb6977.bcb8a4487ba985ca879433439b8737ea.98a984b998765443ba985aa8a898b9a99a9888ba.95a9773843a8597645b64875459b998754984bb9da563a97c96a39.cacaab57ba3989b675e.439da69873855436975a8a968764b38aca8.76a98798868d945a83b76ab864acb343.6ba75b98d97758744cb498d24ba98979a7a88.6aa7686548697ba8b333bb9798ba98bca76867986.c6776d98cb8869756b7..10............8888888888ca89889.889888888898....888888......889222229832243332423222428..7.88a889....8888888..8..8.8.8245542422288888...8.882.8.8..bba9ccbc.c...cba998dc987b9c86a98.....a98a34d787b335355cb6a7298295985655..5733c5844878ba8dcb859b785b8.eb229243adb98a5eb.........000080......90....11215211110100104020005401121041100101000102100110111001001010011011100200000210000011120031236431021323163100101001101100130424400011104010150410014002103344322200321052312245443423414223233242421340243324042424523432253cb9323540043324434243543415325534440445054253423244655552452542455400454441000205555330223225454534456430432c.21001101011310002100000100020110110210013031002131101101010320300000102010002011100101211100010110011001010041010101000300010101000110100210000100010102100001200002022000021022000011301000003200020013120100200101003010004101003100200310013001000110000000001100010000100001021010000100000000003010010000000000010200100100010101001300000100001000020100010000002001000030111001000200001001012021000000000010100101010001001000100310100000100010001140100011000000001101101000010000000010100010000010000000001010010000000001100010011000000000000021010000010110000000000000000000101011001000001100000000010010010001001000000010010003000011000000001000101110000000010100000000110320000010000000110110010000000003120000010000000100010000110000001000000000004101000000200222444140432341323471552322265543258536554344305444675410250232207321055335535455564212552633052055512400557534511254014645535374257764255443443.......553595864695ca98985a98659665.bcbd.......ddba753a953cb8.887dcba9.6a79dc676893a8.ba7698998759baa98764db5.ec87cadcbb9.c92dca9b9ca99998b95ba78721.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10.10".split(".");