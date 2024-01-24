---
layout: tvorba
title: Překlad článku "Co je klíčovými vlastnostmi bitcoinu?" od Jamesona Loppa
date: 2024-01-24 00:00:00
description: |
  Český překlad známého článku Jamesona Loppa o klíčových vlastnostech bitcoinu.
author: Štěpán Drábek
featured: true
featured_image: /uploads/lopp-bitcoin1.jpeg
categories: dalsi tvorba
download:
video-url:
seo:
  title: Překlad článku "Co je klíčovými vlastnostmi bitcoinu?" od Jamesona Loppa
  description: >
    Český překlad známého článku Jamesona Loppa o klíčových vlastnostech
    bitcoinu.
  social_image:
  twitter_card: bitcoin, Braiins, lopp, vlastnosti bitcoinu
  keywords: bitcoin, Braiins, lopp, vlastnosti bitcoinu
  hide-from-google: false
_comments:
  title: Max 70 characters
  social_image: landscape 1200 x 600px
---
Co je to Bitcoin? Ačkoli se mnozí pokoušeli zodpovědět tuto otázku, domnívám se, že naše hledání je [odsouzeno k tomu, aby pokračovalo donekonečna](https://www.coindesk.com/markets/2017/03/11/nobody-understands-bitcoin-and-thats-ok/){: target="_blank" rel="noopener"}. Neustálý vývoj protokolu je místem, kde se odehrává vrcholný výzkum toho, co Bitcoin je, a diskuse o tom, čím by se měl vlastně snažit být.



Pro začátečníky může být obtížné se zorientovat v tom, jaké návrhy budou u Bitcoinu pravděpodobněji přijaty, jelikož existuje spousta nepsaných pravidel týkajících se změn protokolu. Některá z těchto pravidel se týkají spíše filozofické stránky, další spíše technické a bezpečnostní stránky a jiná jsou směsí obou.



**Konsenzus, nikoli velení a řízení**



Bitcoin nemá žádnou autoritu – ani principy uvedené v tomto článku nejsou v žádném případě autoritativní, jsou to pouze postřehy, které jsem si odnesl já a další účastníci ekosystému.



* Bitcoin je systém, který automatizuje neustálé hledání konsenzu mezi jeho účastníky. Je to strojový konsenzus, který prosazuje lidský konsenzus.
* Selhání konsenzu může zničit celý systém tím, že způsobí ztrátu důvěry v jeho spolehlivost.
* Kód konsenzu by měl být ohraničen a mělo by se do něj zasahovat jen výjimečně.
* Uživatelům by neměly být vnucovány změny protokolu bez jejich vlastního souhlasu. To znamená, že uživatelé by měli změny spíše odsouhlasit, než aby je museli odmítat.
* Softwaroví klienti jako takoví by se neměli automaticky aktualizovat, protože by to uživatelům odebralo moc a tu předalo do rukou vývojářů.
* Vzhledem k tomu, že síť je distribuovaná, nelze předpokládat, že každý uživatel věnuje pozornost změnám protokolu.



Jak tedy provedeme změny v systému? Abychom mohli změnit kód konsenzu, musíme nějakým způsobem dosáhnout lidského konsenzu pro změnu pravidel systému. Proces návrhu na zlepšení bitcoinu je popsán [zde](https://github.com/bitcoin/bips/blob/master/bip-0001.mediawiki?ref=nakamoto.com){: target="_blank" rel="noopener"}. Není to dokonalé, ale vytváření konsensu je chaotický proces.



Johnson Lau [v tomto příspěvku](https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2017-April/013985.html?ref=nakamoto.com){: target="_blank" rel="noopener"} dobře popsal jednotlivé typy forků (způsoby provádění změn na základě konsenzu strojů) a Paul Sztorc se [obšírně rozepsal](https://www.truthcoin.info/blog/protocol-upgrade-terminology/?ref=nakamoto.com){: target="_blank" rel="noopener"} o různých úrovních donucení, které jsou u forků možné.



Jak probíhaly změny v minulosti?



* Podle [dekretu Satoshiho](https://bitcointalk.org/index.php?topic=626.msg6490&amp;ref=nakamoto.com){: target="_blank" rel="noopener"}
* Hlasování on-chain těžařů ([BIP 16](https://github.com/bitcoin/bips/blob/master/bip-0016.mediawiki?ref=nakamoto.com){: target="_blank" rel="noopener"})
* Aktualizace v „den vlajky“ ([BIP 30](https://github.com/bitcoin/bips/blob/master/bip-0030.mediawiki?ref=nakamoto.com){: target="_blank" rel="noopener"})
* Mechanizmus IsSuperMajority (přepnutí na dvojnásobnou hranici) ([BIP 34](https://github.com/bitcoin/bips/blob/master/bip-0034.mediawiki?ref=nakamoto.com){: target="_blank" rel="noopener"}, [BIP 65](https://github.com/bitcoin/bips/blob/master/bip-0065.mediawiki?ref=nakamoto.com){: target="_blank" rel="noopener"}, [BIP 66](https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki?ref=nakamoto.com){: target="_blank" rel="noopener"})
* Verze bitů ([BIP 9](https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki?ref=nakamoto.com){: target="_blank" rel="noopener"})



Kdo může navrhované změny přijmout nebo zamítnout? Na úrovni vývojářů je cílem dosáhnout "přibližného konsensu", což znamená, že nepotřebujete 100% souhlas, ovšem musíte každý návrh rozpracovat do té míry, aby proti jeho realizaci nezůstaly žádné rozumné námitky.



Jak změříme podporu pro změny systému? Vývojáři budou diskutovat mezi sebou a dalšími účastníky ekosystému, kterých se návrh může týkat. Každý, kdo věnuje pozornost probíhajícímu vývojářskému úsilí, může poskytnout své podněty prostřednictvím diskuzí v mailing listech, repositářích kódu, sociálních sítích atd.



Řízení protokolu nakonec neprobíhá přesně definovaným způsobem seshora dolů. Spíše [převrací tradiční modely správy](https://youtu.be/_IMzSCSeM68?ref=nakamoto.com){: target="_blank" rel="noopener"} prostřednictvím prosazování zespoda vzhůru.



**Minimalizace nutnosti důvěry**



„Bitcoin je elektronická P2P měna, která je hodnotnější než starší systémy, protože díky decentralizaci přináší svým uživatelům peněžní suverenitu. Bitcoin se snaží řešit základní problém konvenčních měn: všechnu tu důvěru, která je nutná k jejich fungování. Ne že by opodstatněná důvěra byla něčím špatným, ale důvěra způsobuje, že systémy jsou křehké, nepřehledné a na svůj provoz nákladné. Selhání důvěry má za následek systémové kolapsy, kuratelou důvěry vzniká nerovnost a monopolní uzamčení a přirozeně vznikající škrticí místa důvěry mohou být zneužita za účelem odepření přístupu k řádnému procesu.



Bitcoin tyto náklady na důvěru pomocí kryptografických důkazů a decentralizovaných sítí minimalizuje a nahrazuje. S dostupnou technologií existují zásadní trade-offy mezi rozsahem a decentralizací. Pokud je systém příliš nákladný, lidé budou nuceni důvěřovat třetím stranám namísto toho, aby nezávisle prosazovali pravidla systému. Pokud bude spotřeba zdrojů bitcoinového blockchainu vzhledem k dostupné technologii příliš velká, ztratí bitcoin oproti starším systémům konkurenční výhody, protože ověřování bude příliš nákladné (vyřadí mnoho uživatelů), což si vynutí návrat důvěry do systému. Bude-li kapacita příliš nízká a naše metody transakcí příliš neefektivní, bude přístup k řetězci pro řešení sporů příliš nákladný, což opět vytlačí důvěru zpět do systému.“ –&nbsp;**Greg Maxwell**



[O významu této vlastnosti](http://bluematt.bitcoin.ninja/2017/02/28/bitcoin-trustlessness/?ref=nakamoto.com){: target="_blank" rel="noopener"} psal také bitcoinový vývojář Matt Corallo:



„Mezi mnoha vlastnostmi Bitcoinu zdaleka vede "bezdůvěryhodnost" neboli možnost používat Bitcoin bez důvěřování čemukoli jinému než softwaru s otevřeným zdrojovým kódem, který používáte. Přesněji řečeno, zdá se, že zájem o Bitcoin pramení téměř výhradně z touhy vyhnout se nutnosti důvěřovat nějaké třetí straně nebo spojení třetích stran. To by nemělo být pro nikoho novinkou, ale pochopení toho, proč přesně je tato bezdůvěryhodnost tak důležitá (a jakých forem nabývá), je pro budování a modernizaci technologie Bitcoinu zásadní.“



Požadavek na minimalizaci důvěry je základní vlastností, která zajišťuje mnoho dalších principů popsaných v tomto příspěvku. Tyto zásady lze chápat tak, že vycházejí z cíle nízké důvěry a směřují k němu. Nikdy nebudeme schopni dosáhnout 100% „bezdůvěryhodnosti“, protože nikdo nemá prostředky na to, aby kontroloval veškerý software a hardware, který používá pro interakci se sítí. Můžeme se k ní však dostatečně přiblížit, abychom měli jistotu, že se transparentní, incentivně sladěné skupiny účastníků nedomlouvají na úkor zbytku ekosystému.



**Decentralizace**



Otevřený systém, jako je Bitcoin, si nezachová žádoucí vlastnosti popsané v tomto příspěvku, stane-li se příliš centralizovaným, aby jednotlivé aspekty sítě mohli ovládat jednotlivci nebo kartely. Decentralizace je prostředkem, nikoli účelem. Co nejširší distribucí moci minimalizujeme potřebnou důvěru v jakýkoli jeden subjekt, protože víme, že žádný jednotlivý subjekt nemůže zasahovat do našeho používání systému.



„Mnoho lidí automaticky zavrhuje elektronickou měnu jakožto ztracený případ kvůli všem společnostem, které od 90. let zkrachovaly. Doufám, že je zřejmé, že to byla pouze centrálně řízená povaha těchto systémů, která je odsoudila k zániku. Myslím, že nyní poprvé zkoušíme decentralizovaný systém, který není založen na důvěře.“ –&nbsp;[Satoshi Nakamoto](https://satoshi.nakamotoinstitute.org/posts/p2pfoundation/2/?ref=nakamoto.com#selection-25.0-25.307){: target="_blank" rel="noopener"}



Existuje mnoho možných dimenzí centralizace, které lze [stěží kvantifikovat](https://news.earn.com/quantifying-decentralization-e39db233c28e?ref=nakamoto.com){: target="_blank" rel="noopener"}:



* Směnárny
* Vývojáři
* Softwaroví klienti
* Těžební pooly
* Těžební hardware
* Ekonomicky aktivní uzly
* Celkové rozdělení vlastnictví hodnoty
* Procento uživatelů, kteří ovládají své vlastní soukromé klíče
* Procento uživatelů, kteří kontrolují ledger pomocí vlastního uzlu



Vysoká míra centralizace v daném měřítku nemusí nutně znamenat zničení systému, ale měli bychom vzít v potaz, že systém je jen tak silný, jak silné je jeho nejslabší místo. Jakékoli změny systému by proto měly dbát na to, aby nedocházelo ke konsolidaci moci podél všech možných os.



**Odolnost vůči cenzuře**



Nikdo by neměl mít pravomoc bránit ostatním v interakci s bitcoinovou sítí. Stejně tak by nikdo neměl mít pravomoc donekonečna bránit potvrzení platné transakce. Těžaři se sice mohou svobodně rozhodnout transakci nepotvrdit, ale každá platná transakce, za kterou se platí konkurenční poplatek, by nakonec měla být ekonomicky racionálním těžařem potvrzena.



**Pseudonymita**



Pro vlastnictví nebo používání bitcoinu by neměla být vyžadována žádná oficiální identifikace. Tento princip zvyšuje odolnost vůči cenzuře a zaměnitelnost systému, protože je obtížnější vybírat transakce, které budou považovány za "poskvrněné", když systém sám nevede evidenci uživatelů. Tento princip lze také rozšířit na realizaci toho, že systém ani nevyžaduje, aby jeho uživatelé byli lidé.



**Open Source**



Zdrojový kód klienta bitcoinu by měl být vždy otevřený, aby si ho mohl kdokoli přečíst, upravit, kopírovat a sdílet. Hodnota bitcoinu je založena na transparentnosti a kontrolovatelnosti systému. Možnost auditovat jakýkoli aspekt systému zajišťuje, že nemusíme důvěřovat žádným konkrétním entitám, že jednají čestně. Účastníci ekosystému jsou motivováni jednat poctivě, protože vědí, že za nesprávné chování budou potrestáni. Pokud kód, který se používá k interakci se systémem, nemůže být sám o sobě kontrolován, pak se jakákoli funkce auditu, kterou kód umožňuje, stává zbytečnou.



**Otevřená spolupráce**



I když může kdokoli provádět výzkum a vývoj v soukromí, pokusy o změny protokolu – zejména ty, které nejsou zpětně kompatibilní – by měly probíhat otevřeně, nikoli za zavřenými dveřmi. Bitcoin patří celému lidstvu, a proto je důležité, aby navrhované změny byly přístupné veřejnému připomínkování. Doporučeným způsobem, jak navrhovat změny, je proces Bitcoin Improvement Proposal (BIP), ačkoli vzhledem k tomu, že žádný orgán nemůže vynutit, aby byl tento proces dodržován, není to podmínkou.



Problematika dobrovolné organizace a z ní vyplývající mocenská dynamika může vyústit v dojem, že určití lidé nebo skupiny jsou autoritami, což je však pouze iluze moci.



**Absence nutnosti oprávnění**



Žádní svévolní strážci by neměli mít možnost bránit komukoli v účasti na síti (jako transakčnímu subjektu, uzlu, těžaři apod.). To je výsledkem minimalizace důvěry, odolnosti vůči cenzuře a pseudonymity.



**Právní lhostejnost**



Bitcoinu by se neměly týkat zákony národních států, podobně jako jiných internetových protokolů. Regulační orgány budou muset přijít na to, jak reagovat na funkce, které technologie založené na Bitcoinu umožňují, nikoli naopak.



**Zaměnitelnost**



Zaměnitelnost je důležitou vlastností zdravých peněz. Pokud by každý uživatel musel provádět analýzu závadnosti všech peněz, které obdržel, pak by celková užitečnost systému výrazně poklesla.



Všechny UTXOs by měly být stejně použitelné. Bohužel tomu tak v současné době není a existují služby, které sledují „poskvrněné“ UTXOs, jež jsou spojeny s trestnou činností. Vedlejším efektem toho je skutečnost, že se nevinní uživatelé mohou zaplést do akcí zabavování mincí kvůli utrácení UTXO, které jsou jen několik skoků vzdálené od toho „poskvrněného“ UTXO.



Zaměnitelnost vyžaduje soukromí; soukromí plyne z toho, že máte velkou množinu uživatelů, mezi nimiž nelze rozeznat vlastníka transakcí. Bohužel je známo [mnoho hrozeb](https://github.com/OpenBitcoinPrivacyProject/wallet-ratings/blob/master/report-03/threat%20model.wiki?ref=nakamoto.com){: target="_blank" rel="noopener"} pro soukromí uživatelů Bitcoinu, a proto Bitcoin ve svém současném stavu zdaleka není dokonale zaměnitelný.



**Dopředná kompatibilita**



Bitcoin podporuje podepisování transakcí bez jejich šíření; platí zásada, že všechny aktuálně podepsané, ale nerozšířené transakce by měly zůstat platné a rozšiřitelné. Dobrým příkladem jsou transakce s nLocktime, které jsou platné pro potvrzení až po uplynutí doby určené transakcí; to by se dalo využít pro dědictví nebo jiné účely s časovým zpožděním. Změna tohoto pravidla by mohla mít nebezpečné důsledky – neznámý počet neodeslaných transakcí by se mohl stát neplatným. Nikdo nechce být zodpovědný za zkázu něčího majetku kvůli tomu, že mu bylo odepřeno pravidlo, na které se uživatel spoléhal.



Skutečnost, že se Bitcoin této zásady drží, dává každému důvěru v protokol. Každý si může zajistit své prostředky libovolným způsobem, který si vymyslí, a použít jej, aniž by k tomu potřeboval povolení. Dokud dodržuje pravidla protokolu, to nejhorší, co se může stát, je, že uzly přestanou standardně zprostředkovávat určité transakce.



**Minimalizace množství vynaložených zdrojů**



Proto, aby náklady na ověřování transakcí byly nízké, je prostor pro bloky omezený. Z toho důvodu by mělo být pro každého drahé nadužívat velké množství prostoru v blocích. Důležitou zásadou je zde podporovat utrácení (spotřebovávání) UTXOs a odrazovat od vytváření UTXOs. Tato zásada se může změnit, pokud přestane být UTXO bloat problémem kvůli UTXO akumulátorům.



Validace by měla být levná, protože podporuje minimalizaci důvěry, může-li si audit systému dovolit více uživatelů; levná validace také prodražuje útoky na vyčerpání zdrojů. Bitcoin poskytuje mechanismus pro včasné odmítnutí lacině vytvořených neplatných bloků. To je základní princip hash cash – donutit útočníka draze zaplatit za vytvoření spamu. Tím, že si uzel nejprve stáhne 80bajtovou hlavičku bloku, může získat důkaz práce a provést správnou a rychlou validaci ještě předtím, než vůbec synchronizuje transakce bloku.



Měli bychom také upřednostnit efektivní využití prostoru v bloku tím, že budeme ukládat pouze minimum dat potřebných pro validaci složitých operací, a ne že budeme ukládat a provádět složité operace v samotném blockchainu.



**Ověření &gt; Výpočet**



Jedná se o podmnožinu principu minimalizace zdrojů. U komplexní logiky je žádoucí, aby provádění uvedené logiky řídilo co nejméně lidí; všichni ostatní, kteří v síti provozují plně validní uzel, by se neměli zabývat každým jednotlivým krokem logiky, ale měli by být jednoduše spokojeni s tím, že logika byla provedena správně. Správnost je důležitější než úplnost.



„Používejte blockchain na to, k čemu je dobrý.“ – **Andrew Poelstra**



Nejlepší možnou optimalizací pro jakýkoli systém je v první řadě vůbec zamezit provádění výpočtů. Blockchain je vhodný pro ukládání dat s časovým razítkem pro účely kontroly; uložení důkazu o výpočtu, který může zkontrolovat kdokoli, koho to zajímá, by mělo stačit, na rozdíl od požadavku, aby každý účastník počítal logiku transakcí, jež se ho netýkají.



**Konvergence**



Jestliže se dva klienti bitcoinu připojí k jednomu poctivému partnerovi, měli by nakonec konvergovat ke stejnému konci řetězce. Jako příklad lze uvést [Bitcoin ABC](https://blog.bitmex.com/bitcoin-cash-abcs-rolling-10-block-checkpoints/?ref=nakamoto.com){: target="_blank" rel="noopener"}, který tuto zásadu porušil zavedením pravidla reorganizace řetězce o maximálním počtu 10 bloků. Výsledkem bylo, že pokud by došlo k rozdělení sítě a země jako Čína by byla odříznuta od zbytku internetu, tito těžaři by pokračovali v těžbě jiného řetězce a po opětovném spojení sítí by se obě rozvětvení řetězce nespojila v řetězec s největším kumulativním důkazem práce.



Všechny transakční operace musí být deterministické. Transakci by mělo být možné provést pouze jedním způsobem, pokud je stav systému stejný; faktory, které jsou mimo systém, by neměly mít na jeho výpočty žádný vliv. Stejně tak by neměly existovat skripty, které pracují dvěma různými způsoby na dvou rozdílných strojích. Jediným řešením tohoto problému je izolace – chytré kontrakty a transakce musejí být nezávislé na nedeterministických prvcích.



Změny protokolu by neměly vytvářet potenciál pro zneplatnění transakcí v důsledku reorganizace blockchainu. Transakční operace by měly být nejen deterministické, ale také bezstavové. Viz například návrh [OP\_BLOCKNUMBER z roku 2010](https://bitcointalk.org/index.php?topic=1786.msg22119&amp;ref=nakamoto.com){: target="_blank" rel="noopener"}.



Několik lidí navrhlo opcodes, které by mohly zneplatnit transakci po reorganizaci. Obecně se požaduje, aby byly návrhy přepracovány tak, aby byly vždy dopředu platné pomocí návrhu OP\_CLTV, ale někdy je to nežádoucí nebo nepraktické a navrhuje se, že by mohlo být přijatelné mít opkód, který zatěžuje transakci na sto bloků podobně jako transakce na coinbase nebo OP\_CSV 100 bloků.



**Nezměnitelnost transakcí**



Každý další blok zařazený do řetězce po daném bloku by měl snížit pravděpodobnost, že se daný blok stane orphanem v důsledku reorganizace řetězce. Ačkoli protokol umožňuje reorganizaci řetězce libovolné délky, dlouhé reorganizace by pravděpodobně působily nepříznivě, protože některé softwary nebo uzly by je nemusely zvládnout s přehledem. Také reorganizace delší než 100 bloků by mohly být ještě rušivější, protože by způsobily, že by přestaly existovat utracené transakce na coinbase, čímž by se efektivně zničila jejich hodnota.



Třebaže nelze technicky zaručit nezměnitelnost, můžeme zajistit, že se stane neprakticky nákladné zvrátit transakci poté, co je pod dostatečným množstvím důkazů práce pohřbena.



**Odolnost proti DoS**



Nemělo by být možné, aby vzdálený uživatel zadal uzlu Bitcoinu požadavek, který spotřebuje nadměrné množství zdrojů. Příkladem funkcí, které tuto zásadu porušují, jsou bloom filtry SPV, jež lze v případě nepříznivých podmínek použít k tomu, aby cílový uživatel spotřeboval velké množství diskových vstupů a výstupů tím, že je donutí prohledat velké množství blokových dat. Mnoho pravidel ochrany proti DoS si můžete prohlédnout [zde](https://github.com/bitcoin/bitcoin/blob/v0.19.0/src/net_processing.cpp?ref=nakamoto.com){: target="_blank" rel="noopener"}, když na stránce vyhledáte "misbehav". Akcím, které jsou považovány za škodlivé, se přidělují různá skóre, a pokud uživatel překročí maximální skóre misbehavior, váš uzel se odpojí, aby se zabránilo dalšímu zneužití.



**Vyhýbání se závodním podmínkám**



Závodní podmínky nastávají, když chování systému závisí na posloupnosti nebo načasování neovlivnitelných událostí. V distribuovaném systému bez povolení, jako je Bitcoin, jsou události obecně nepředvídatelné. Model UTXO nám pomáhá vyhnout se závodním podmínkám, protože výstupy jsou utraceny všechny najednou – stav výstupu transakce je binární (je buď utracen, nebo neutracen).



To je další důvod, proč by transakce neměly být závislé na stavu systému; při změně stavu během reorganizace blockchainu to může vytvářet závodní podmínky a složitost.



**Konzervatismus**



* Peníze by měly být dlouhodobě stabilní.
* Při provádění změn bychom měli být konzervativní, abychom minimalizovali rizika pro systém a umožnili lidem nadále používat tento systém způsobem, který považují za správný.
* Od uživatelů bychom neměli očekávat velkou schopnost reagovat na problémy systému, a proto bychom měli být aktivní a opatrní, abychom je omezili!



O čem je vlastně konzervatismus? Je to způsob, jak zajistit sociální škálovatelnost.



„Celé tajemství úspěchu bitcoinu spočívá v tom, že za jeho velkou spotřebu zdrojů a špatnou výpočetní škálovatelnost si kupuje něco ještě cennějšího: škálovatelnost sociální.“ –&nbsp;[Nick Szabo](https://unenumerated.blogspot.com/2017/02/money-blockchains-and-social-scalability.html?ref=nakamoto.com){: target="_blank" rel="noopener"}



Problém, který je vlastní mnoha systémům řízeným lidmi, tkví v tom, že pravidla systému mohou být uplatňována libovolně nebo mohou být měněna podle něčího rozmaru. To vede k tomu, že systémy jsou méně spolehlivé.



„Jakmile se nám podaří zabezpečit nejdůležitější funkce finanční sítě pomocí výpočetní techniky, a nikoli pomocí tradičních účetních, regulačních orgánů, vyšetřovatelů, policie a právníků, přejdeme od systému, který je manuální, lokální a nedostatečně bezpečný, k systému, který je automatizovaný, globální a mnohem lépe zabezpečený.“ –&nbsp;[Nick Szabo](https://unenumerated.blogspot.com/2017/02/money-blockchains-and-social-scalability.html?ref=nakamoto.com){: target="_blank" rel="noopener"}



**Sladění incentivů**



Bitcoin funguje výhradně proto, že pravidla systému motivují účastníky k poctivosti. Těžaři by například teoreticky mohli reorganizovat řetězec tak, aby své vlastní peníze utratili vícekrát, ale tím by se střelili do vlastní nohy a jejich investice do hardwaru a elektřiny by tím ztratily hodnotu. Je pro ně výhodnější vynakládat své prostředky na zabezpečení blockchainu čestným způsobem.



**Zkostnatělost**



Panuje obecné přesvědčení, že postupem času bude stále náročnější provádět změny v základním protokolu, neboť ekosystém roste. Je to proto, že bude stále méně změn, které by byly nekontroverzní pro širší škálu pohledů a podnětů uživatelské základny. Proto bude pravděpodobnější, že k vylepšení bude muset dojít v jiných vrstvách postavených na Bitcoinu.



**Nepravděpodobné změny konsenzu**



* Zvýšení celkového počtu vytvořených bitcoinů nad 21 milionů. Zatímco dělitelnost může být zvýšena, poměrné vlastnictví musí zůstat neměnné.
* Jakékoli pravidlo, které přidává požadovanou, explicitní centralizaci. Například změna vyžadující, aby všechny bloky byly podepsány nějakou centrální organizací.
* Demurrage (vymazání nebo přerozdělení mincí vyhodnocených jako "ztracené" nebo " nepoužívané"). Není možné objektivně říci, že soukromý klíč k UTXO byl ztracen jen proto, že nebyl po určitou dobu používán. V době psaní tohoto článku existuje pouze přibližně 5 000 prokazatelně ztracených / spálených BTC, ačkoli ztracených BTC může být klidně více než 1 000 000.



**Protichůdné principy**



Zlepšení zaměnitelnosti (soukromí), které by vedlo k znemožnění kontroly peněžní zásoby, je nepravděpodobné, poněvadž zhoršení kontrolovatelnosti výměnou za zlepšení zaměnitelnosti je kontroverzní kompromis.



Může se stát, že v určitém okamžiku bude žádoucí učinit některé UTXOs nepoužitelnými, aby se ochránila síť, například fondy P2PK, které by mohly být zranitelné vůči kvantovým útokům. Každý takový návrh by byl kontroverzní, ale možná by jej uživatelé akceptovali, jestliže by jeho přínosy výrazně převážily nad škodami.



Budoucí platnost není zaručena, neboť řetězec by mohl být reorganizován před transakcí coinbase, při níž byla hodnota původně vytvořena. Existuje pravidlo splatnosti 100 bloků coinbase, které pomáhá chránit před takovým scénářem, a mainnet v době psaní tohoto článku zřídkakdy vidí reorganizace o více než jeden blok.



akonec je jednou z hlavních příčin konfliktů v ekosystému bitcoinu skutečnost, že nemůže být všechno pro všechny. Kdyby tomu tak bylo, znamenalo by to pro Bitcoin úpadek, protože existují zásadní kompromisy mezi různými prioritami, jako například:



* Optimalizace pro nízké náklady na ověření celého systému vs. nízké náklady na transakce.
* Optimalizace pro programovací jazyk bohatý na funkce vs. malý prostor pro útoky.



**Společně postupujeme svižným tempem**



„Aby mohli uživatelé i nadále provádět transakce a důvěřovat Bitcoinu tak, jak tomu bylo vždy, musí komunita uživatelů Bitcoinu i nadále prosazovat, aby ke změnám docházelo pouze na základě konsenzu mezi stále se rozšiřující skupinou uživatelů. A naopak, aby Bitcoin zbytečně nestagnoval, musí být jeho komunita ochotna vytvářet konsenzus a provádět změny, které pomohou systému, jenž chtějí používat, aniž by tím poškodili ostatní, a provádět změny, které dávají smysl, ať už mají jakoukoli podobu. To především znamená, že by měly být provedeny všechny změny, které nepoškozují užitečnost Bitcoinu pro žádný z jeho mnoha případů využití a zároveň pomáhají ostatním, kdykoli je to možné.“ – **Matt Corallo**