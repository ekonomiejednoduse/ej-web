---
layout: post
title: Jak funguje Bitcoin?
date: 2022-04-22 00:00:00
description: >-
  Jakým způsobem je u Bitcoinu zabezpečena veřejná účetní kniha – blockchain?
  Odpověď na tuto otátzku naleznete právě v tomto článku.
author: Štěpán Drábek
featured: true
categories:
  - bitcoin
featured_image: /uploads/jak-funguje-bitcoin-2.png
download: jak-funguje-bitcoin.pdf
seo:
  title: Jak funguje bitcoin?
  description:
  social_image: /uploads/jak-funguje-bitcoin-1.png
  twitter_card:
  keywords: Bitcoin, blockchain, těžba, hash
  hide-from-google: false
_comments:
  title: Max 70 characters
  social_image: landscape 1200 x 600px
---
Po přečten&iacute; minulého čl&aacute;nku o tom, co je to Bitcoin a proč vznikl, V&aacute;s možn&aacute; napadla (naprosto spr&aacute;vn&aacute;) ot&aacute;zka, a sice, kdo onu &uacute;četn&iacute; knihu, Blockchain, spravuje, když m&aacute; Bitcoin decentralizovanou podobu a ž&aacute;dn&aacute; jedna entita jej neovl&aacute;d&aacute;? A přesně touto ot&aacute;zkou, respektive t&iacute;m, jak Bitcoin funguje po technické str&aacute;nce, se v n&aacute;sleduj&iacute;c&iacute;ch ř&aacute;dc&iacute;ch budeme zab&yacute;vat. Tento čl&aacute;nek bude na pochopen&iacute; lehce složitějš&iacute;, ale když si jej přečtete, pochop&iacute;te z&aacute;klady fungov&aacute;n&iacute; Bitcoinu a z&iacute;sk&aacute;te tak konkurenčn&iacute; v&yacute;hodu oproti naprosté většině světové populace.

&nbsp;

> Blockchain je zkr&aacute;tka pouze veřejn&aacute; datab&aacute;ze, ale mus&iacute;me ještě nějak zajistit, aby do n&iacute; nemohl data ps&aacute;t každ&yacute;, aby kdokoliv nemohl vyhr&aacute;t loterii.
>
>
> &nbsp;

*Blockchain* (veřejn&aacute; &uacute;četn&iacute; kniha) je spravov&aacute;n pomoc&iacute; takzvané *těžby*. Těžbu si lze představit jako jednu velkou loterii. Těžaři (ti, co prov&aacute;d&iacute; těžbu) se snaž&iacute; naj&iacute;t určité č&iacute;slo – *nonce*, přičemž ten, kdo toto č&iacute;slo nalezne jako prvn&iacute;, z&iacute;sk&aacute; možnost dostat odměnu v podobě nov&yacute;ch bitcoinů. Tedy motivace spravovat veřejnou &uacute;četn&iacute; knihu je prim&aacute;rně finančn&iacute;, a to v podobě nov&yacute;ch minc&iacute; a transakčn&iacute;ch poplatků od uživatelů *Bitcoinové s&iacute;tě*.

&nbsp;

Jakmile těžař nalezne onu spr&aacute;vnou nonce, kterou naz&yacute;v&aacute;me *golden nonce*, aplikuje na n&iacute; (společně s ostatn&iacute;mi &uacute;daji v *hlavičče bloku*, jako je *merkle root, časové raz&iacute;tko*, anebo *hash* přechoz&iacute;ho bloku) takzvanou *hashovac&iacute; funkci*. Hashovac&iacute; funkce je matematick&aacute; funkce, kter&aacute; přev&aacute;d&iacute; zpr&aacute;vu o libovolné délce na otisk, *hash* (nečitelnou kombinaci p&iacute;smen a č&iacute;sel) s přesně danou velikost&iacute;. Bitcoin využ&iacute;v&aacute; hashovac&iacute; funkci *SHA-256*, tedy v&yacute;stup hashovac&iacute; funkce m&aacute; 256 bitů. Přičemž plat&iacute;, že drobn&aacute; změna ve zpr&aacute;vě na vstupu vede k velké změně ve v&yacute;stupu. Dejme si jednoduch&yacute; př&iacute;klad: Vytvoř&iacute;me si nějak&yacute; vstup, např&iacute;klad slovo Bitcoin. Tento vstup vlož&iacute;me do hashovac&iacute; funkce SHA-256 a vyjde n&aacute;m otisk – ***b4056df6691f8dc72e56302ddad345d65fead3ead9299609a826e2344eb63aa4***, kdybychom však změnili slovo Bitcoin na Bitcon, vyjde n&aacute;m zcela odlišn&yacute; v&yacute;stup – ***dcb05a36f3d9336f77cc7bd59cffabd6f10a0fba48efc7d2ab6cbdd3d8b8d4ca***. U hashovac&iacute;ch funkc&iacute; nav&iacute;c plat&iacute;, že nejsou obousměrné, symetrické. Z v&yacute;stupu této funkce je prakticky nemožné zjistit jej&iacute; vstup. Pravděpodobnost, že byste z v&yacute;stupu zjistili jeho vstup je (d&iacute;ky bin&aacute;rn&iacute; soustavě – 0 nebo 1) 2ˇ256, což je zhruba tak stejně velké č&iacute;slo, jako počet atomů ve vesm&iacute;ru.

&nbsp;

> U Bitcoinu totiž onu loterii vyhr&aacute;v&aacute; ten, kdo k tomu obětuje nejv&iacute;ce, kdo utop&iacute; největš&iacute; množstv&iacute; n&aacute;kladů, a to v podobě elektřiny.

&nbsp;

V minulém čl&aacute;nku jsem zm&iacute;nil, že *problém dvoj&iacute; &uacute;traty* byl u Bitcoinu vyřešen pomoc&iacute; toho, že je mezi všemi uživateli veřejn&aacute; &uacute;četn&iacute; kniha, avšak to nen&iacute; &uacute;plně pravda. A to, jelikož blockchain samotn&yacute; neřeš&iacute; problém dvoj&iacute; &uacute;traty, řeš&iacute; jej v kombinaci s *konsenzu&aacute;ln&iacute;m algoritmem*. Blockchain je zkr&aacute;tka pouze veřejn&aacute; datab&aacute;ze, ale mus&iacute;me ještě nějak zajistit, aby do n&iacute; nemohl data ps&aacute;t každ&yacute;, aby kdokoliv nemohl vyhr&aacute;t loterii.

&nbsp;

Bitcoin k tomu použ&iacute;v&aacute; algoritmus *Proof of Work*. U Bitcoinu totiž onu loterii vyhr&aacute;v&aacute; ten, kdo k tomu obětuje nejv&iacute;ce, kdo utop&iacute; největš&iacute; množstv&iacute; n&aacute;kladů, a to v podobě elektřiny. K z&iacute;sk&aacute;n&iacute; odměny je potřeba zahashovat veškeré &uacute;daje v *bloku*. Blok je datov&aacute; struktura, ve které se nach&aacute;z&iacute; jednotlivé transakce, časové raz&iacute;tko (*timestamp*), nonce a hash předchoz&iacute;ho bloku. Tyto bloky jsou na sebe *kryptograficky* nav&aacute;z&aacute;ny, každ&yacute; blok potvrzuje blok předchoz&iacute;, a t&iacute;m ztěžuje jeho změnu, a tvoř&iacute; řetězec bloků – Blockchain. Ten je pr&aacute;vě d&iacute;ky kryptografické n&aacute;vaznosti jednotliv&yacute;ch bloků nezměniteln&yacute; (respektive tak tomu je, kvůli možnosti *reorgu*, pouze od určité hloubky *transakce* v Bitcoinovém blockchainu). Kdybychom chtěli změnit transakci ve vůbec prvn&iacute;m bloku, kter&yacute; vytěžil samotn&yacute; *Satoshi Nakamoto,*[*genesis bloku*](https://commons.wikimedia.org/wiki/File:Bitcoin-Genesis-block.jpg){: target="_blank" rel="noopener"}*,* hash celého bloku by byl naprosto odlišn&yacute; od hashe původn&iacute;ho, spr&aacute;vného bloku (vzpomeňme si, že sebemenš&iacute; změna ve vstupu hashovac&iacute; funkce vede k zcela jinému v&yacute;stupu). Co by to znamenalo? Tento blok by nenavazoval na ostatn&iacute; bloky a byl by neplatn&yacute;m. Proč? Souč&aacute;st&iacute; bloků je hash předchoz&iacute;ho bloku, pomoc&iacute; kterého jsou jednotlivé bloky na sebe nav&aacute;z&aacute;ny. Ve chv&iacute;li, kdyby se tento hash změnil, blok by k ostatn&iacute;m blokům jednoduše neseděl.

&nbsp;

![Řetězec bloků – Blockchain](/uploads/blockchain-4.png "Řetězec bloků – Blockchain"){: .small-centered-image width="1993" height="1155"}

​​​​

Jak je ale možné z&iacute;skat onu odměnu? Přece jenom, to, že se k z&iacute;sk&aacute;n&iacute; nov&yacute;ch minc&iacute; mus&iacute; zahashovat veškeré &uacute;daje v bloc&iacute;ch nijak nezaruč&iacute; to, že je vytěž&iacute; ten, kdo k tomu obětoval nejv&iacute;ce zdrojů. A nyn&iacute; přich&aacute;z&iacute; do hry znalost hashovac&iacute;ch funkc&iacute;. Bitcoinov&aacute; s&iacute;ť předem zn&aacute; takzvané *c&iacute;lové č&iacute;slo*. V&yacute;sledn&yacute; hash vešker&yacute;ch &uacute;dajů v bloku mus&iacute; b&yacute;t menš&iacute; nebo stejn&yacute; jako ono c&iacute;lové č&iacute;slo. Komu takto vyjde hash, z&iacute;sk&aacute; pravomoc uzavř&iacute;t blok, rozeslat jej mezi uživatele Bitcoinové s&iacute;tě a z&iacute;skat odměnu v podobě nov&yacute;ch bitcoinů.

&nbsp;

> Důsledek růstu nab&iacute;dky zlata je pak pokles jeho ceny. Bitcoin ale funguje jinak.
>
>
> &nbsp;

Nyn&iacute; ale nast&aacute;v&aacute; problém, jelikož každé dva t&yacute;dny (respektive každ&yacute;ch *2016* bloků) se c&iacute;lové č&iacute;slo měn&iacute; v z&aacute;vislosti v&yacute;početn&iacute; kapacity (měřeno množstv&iacute;m hashů za sekundu) Bitcoinové s&iacute;tě vždy tak, aby se blok vytěžil každ&yacute;ch *10 minut*. Tomuto regulačn&iacute;mu mechanismu ř&iacute;k&aacute;me *difficulty algorithm* (algoritmus n&aacute;ročnosti těžby). D&iacute;ky této technologii můžeme předem vědět, kdy se kolik nov&yacute;ch bitcoinů vytěž&iacute;, jeho *monet&aacute;rn&iacute;* politika je tak do budoucna zn&aacute;m&aacute;. To je obrovsk&aacute; v&yacute;hoda např&iacute;klad oproti zlatu, kde růst jeho ceny vede k v&yacute;hodnějš&iacute; těžbě, a tedy i k větš&iacute; produkci tohoto drahého kovu. Důsledek růstu nab&iacute;dky zlata je pak pokles jeho ceny. Bitcoin ale funguje jinak. Růst jeho ceny sice kr&aacute;tkodobě zv&yacute;hodn&iacute; těžbu (dokud nedojde ke změně c&iacute;lového č&iacute;sla), ale těžaři nevytěž&iacute; v&iacute;ce bitcoinů (Bitcoinov&yacute; protokol jim to jednoduše neumožňuje), pouze v&iacute;ce zabezpeč&iacute; s&iacute;ť, což m&aacute; neutr&aacute;ln&iacute; (respektive někdy dokonce i pozitivn&iacute;) dopad na cenu bitcoinu.

&nbsp;

Možn&aacute; jste někdy slyšeli o tom, že těžba je způsob, jak si může kdokoliv vytvořit nové bitcoiny. To však nen&iacute; &uacute;plně pravda. Těžba totiž nen&iacute; pro každého. Dnes je to už velice sofistikovan&aacute; profesion&aacute;ln&iacute; činnost, a to pr&aacute;vě kvůli algoritmu n&aacute;ročnosti těžby. Dř&iacute;ve bylo možné bitcoiny těžit na procesoru standardn&iacute;ho poč&iacute;tače, protože v&yacute;početn&iacute; s&iacute;la celé s&iacute;tě byla mal&aacute;, a tedy c&iacute;lové č&iacute;slo vysoké (č&iacute;m vyšš&iacute; je c&iacute;lové č&iacute;slo, t&iacute;m větš&iacute; je pravděpodobnost nalezen&iacute; nonce). To se ale časem změnilo. Jak se Bitcoin st&aacute;val popul&aacute;rnějš&iacute;m, rostlo množstv&iacute; jeho uživatelů i těžařů. Což vedlo k růstu v&yacute;početn&iacute; s&iacute;ly celé s&iacute;tě a poklesu hodnoty c&iacute;lového č&iacute;sla. Začalo se tak těžit na v&yacute;početně v&yacute;konnějš&iacute;ch grafick&yacute;ch kart&aacute;ch. N&aacute;ročnost těžby neust&aacute;le rostla a rostla. Dnes se bitcoiny těž&iacute; v takzvan&yacute;ch *těžebn&iacute;ch poolech*, ve kter&yacute;ch je několik des&iacute;tek tis&iacute;c specializovan&yacute;ch strojů př&iacute;mo na těžbu bitcoinů – *ASIC minerů*. T&iacute;m, že je v daném poolu několik v&yacute;konn&yacute;ch těžebn&iacute;ch strojů, zvyšuje se pravděpodobnost, že pr&aacute;vě ona skupina těžařů nalezne golden nonce, pomoc&iacute; které z&iacute;skaj&iacute; nové bitcoiny. Tyto pooly maj&iacute; často rozd&iacute;lné obchodn&iacute; strategie, ale většina z nich funguje na tom principu, že svoji odměnu rozděl&iacute; jednotliv&yacute;m těžařům (respektive vlastn&iacute;kům ASIC minerů) podle toho, jak velk&yacute;m v&yacute;početn&iacute;m v&yacute;konem poolu přispěli.

&nbsp;

> Je to jednoduché, u každé transakce je *transakčn&iacute; poplatek*, kter&yacute; po vytěžen&iacute; bloku připad&aacute; pr&aacute;vě jej&iacute;mu těžaři.
>
>
> &nbsp;

Ale teď zpět ke konsenzu&aacute;ln&iacute;mu algoritmu Proof of Work. Proof of Work znamen&aacute; důkaz vykonané pr&aacute;ce, avšak, co je t&iacute;m důkazem pr&aacute;ce? Je to golden nonce. Samotn&yacute; fakt, že těžař nalezl spr&aacute;vnou nonce, pomoc&iacute; které mu jako v&yacute;sledek hashovac&iacute; funkce vyšel hash menš&iacute; než c&iacute;lové č&iacute;slo, znamen&aacute;, že k tomu musel obětovat obrovské množstv&iacute; v&yacute;početn&iacute;ho v&yacute;konu. Tento důkaz je tak velmi těžké vytvořit, ale naopak naprosto jednoduché ověřit (stač&iacute; použ&iacute;t veškeré &uacute;daje v bloku jako vstup hashovac&iacute; funkce SHA-256 a vyjde V&aacute;m stejn&yacute; v&yacute;stup jako těžařovi). Vzhledem k takto n&aacute;kladné činnosti nemaj&iacute; těžaři incentivy pro to, aby podv&aacute;děli, protože by spotřebovali obrovské množstv&iacute; elektrické energie a ž&aacute;dné bitcoiny by nez&iacute;skali, to jednoduše ned&aacute;v&aacute; smysl.

&nbsp;

> Veškeré transakce, tj. přesunut&iacute; bitcoinů z jedné *bitcoinové adresy* na druhou, ukl&aacute;daj&iacute; *uzly* v Bitcoinové s&iacute;ti, *nody*, do takzvaného *mempoolu*.
>
>
> &nbsp;

Těžaři z&iacute;sk&aacute;vaj&iacute; svoji odměnu pomoc&iacute; takzvané *coinbase* (generuj&iacute;c&iacute;) *transakce*. Avšak jsme si ř&iacute;kali, že pomoc&iacute; těžby se zabezpečuje &uacute;četn&iacute; kniha, respektive zaručuje spr&aacute;vnost jednotliv&yacute;ch transakc&iacute;. Tak jakou maj&iacute; těžaři motivaci zabezpečovat transakce? Je to jednoduché, u každé transakce je *transakčn&iacute; poplatek*, kter&yacute; po vytěžen&iacute; bloku připad&aacute; pr&aacute;vě jej&iacute;mu těžaři. D&iacute;ky tomu nen&iacute; v bloku pouze jedin&aacute; transakce, generuj&iacute;c&iacute; bitcoiny, ale i transakce běžn&yacute;ch uživatelů.

&nbsp;

Veškeré transakce, tj. přesunut&iacute; bitcoinů z jedné *bitcoinové adresy* na druhou, ukl&aacute;daj&iacute; *uzly* v Bitcoinové s&iacute;ti, *nody*, do takzvaného *mempoolu*. Plnohodnotn&yacute; uzel v Bitcoinové s&iacute;ti je zař&iacute;zen&iacute;, které v sobě uchov&aacute;v&aacute; celou historii Bitcoinového blockchainu (dnes je to zhruba *470 GB*) a ověřuje transakce nové, např&iacute;klad pomoc&iacute;, pro tento &uacute;čel, nejpouž&iacute;vanějš&iacute;ho softwaru *Bitcoin Core*. Možn&aacute; jsem V&aacute;s nyn&iacute; zm&aacute;tl t&iacute;m, že uzly ověřuj&iacute; transakce, přece to je pr&aacute;ce těžařů, anebo ne? Rozd&iacute;l mezi uzly a těžaři je přitom naprosto z&aacute;sadn&iacute;. Když někomu odešlete transakci, tato transakce se nejprve rozš&iacute;ř&iacute; mezi veškeré uzly, ty ověř&iacute;, zda neutr&aacute;c&iacute;te již utracené bitcoiny a zda je V&aacute;mi poskytnut&yacute; *digit&aacute;ln&iacute; podpis* validn&iacute;, a n&aacute;sledně je zařad&iacute; do mempoolu. Z mempoolu pak těžař vybere transakce (samozřejmě vyb&iacute;r&aacute; transakce s co nejvyšš&iacute;m transakčn&iacute;m poplatkem), které zařad&iacute; do bloku a t&iacute;m je potvrd&iacute;. Tyto bloky pak rozš&iacute;ř&iacute; do Bitcoinové s&iacute;tě mezi všechny uzly a ostatn&iacute; těžaře. Zjednodušeně tak můžeme ř&iacute;ci, že uzly ověřuj&iacute; transakce a těžaři je naopak potvrzuj&iacute;. Každ&yacute; těžař je uzel, ale když m&aacute;te vlastn&iacute; Bitcoinov&yacute; node nemus&iacute;te b&yacute;t těžařem.

&nbsp;

Avšak zde nast&aacute;v&aacute; dalš&iacute; ot&aacute;zka, a sice, co br&aacute;n&iacute; nodům, aby v s&iacute;ti rozš&iacute;řili transakce, které se ve skutečnosti nestaly? Nyn&iacute; vstupuje do hry *teorie her*. Vždy, když lidé, jakkoliv jednaj&iacute;, maj&iacute; k tomu určité *incentivy*, motivace, chcete-li. Jin&yacute;mi slovy, je dobré se pokaždé zam&yacute;šlet nad t&iacute;m, co vede lidi k tomu, aby se určit&yacute;m způsobem chovali. A Bitcoin je geni&aacute;ln&iacute; systém incentiv. Jsou zde totiž jednotliv&iacute; uživatelé motivov&aacute;ni udržovat celou s&iacute;ť ve spr&aacute;vném chodu. Proč tomu tak je? Bitcoinov&iacute; uživatelé (většinou) drž&iacute; mince samotného ekosystému – bitcoiny. *Kupn&iacute; s&iacute;la* (respektive dnes sp&iacute;še cena měřen&aacute; ve st&aacute;tn&iacute;ch měn&aacute;ch) by mohla v důsledku &uacute;toku na s&iacute;ť totiž v&yacute;razně poklesnout (mohla by se sn&iacute;žit popt&aacute;vka po bitcoinech a to by za jinak stejn&yacute;ch podm&iacute;nek vedlo k poklesu ceny), a to si ž&aacute;dn&yacute; *Bitcoiner* nepřeje… A naopak by v př&iacute;padě hladkého fungov&aacute;n&iacute; Bitcoinu mohla jeho cena vzrůst, č&iacute;mž by se jeho držitelé stali bohatš&iacute;mi. Ekonomické motivace jednoduše funguj&iacute;.

&nbsp;

> Bitcoin je totiž systém, kde každ&yacute; kontroluje každého a snaž&iacute; se zabr&aacute;nit jak&yacute;mkoliv podvodům.
>
>
> &nbsp;

Nav&iacute;c dnes celou Bitcoinovou s&iacute;ť spravuj&iacute; des&iacute;tky, ne-li i stovky tis&iacute;c (přesn&aacute; č&iacute;sla nejsou veřejně zn&aacute;m&aacute;, protože velk&aacute; č&aacute;st nodů nem&aacute; zveřejněnou IP adresu a zůst&aacute;v&aacute; tak v anonymitě) uzlů. Tud&iacute;ž i kdyby se našlo p&aacute;r neposlušn&yacute;ch nodů, které by chtěli ostatn&iacute; podvést, většina uzlů by tyto transakce ověřila jako neplatné a nezařadila do mempoolu, potažmo těžaři neum&iacute;stili do bloku. Falešné transakce by tak byly neplatné. Bitcoin je totiž systém, kde každ&yacute; kontroluje každého a snaž&iacute; se zabr&aacute;nit jak&yacute;mkoliv podvodům.

&nbsp;

Co by se ale stalo, kdyby dva rozd&iacute;ln&iacute; těžaři vytěžili a do s&iacute;tě rozš&iacute;řili nov&yacute; blok s validn&iacute;mi transakcemi a spr&aacute;vn&yacute;m důkazem vykonané pr&aacute;ce v jednu a tu samou chv&iacute;li? Takov&aacute;to situace skutečně čas od čase nastane a ř&iacute;k&aacute;me j&iacute; *fork* nebo také *rozštěpen&iacute; blockchainu*. Bitcoin tento problém řeš&iacute; šalamounsk&yacute;m způsobem, a sice t&iacute;m, že počk&aacute;me a uvid&iacute;me. Vzhledem k tomu, že jsou oba tyto bloky validn&iacute;, těžaři si mohou vybrat, kter&yacute; blok zařad&iacute; do své kopie &uacute;četn&iacute; knihy a použij&iacute; jako z&aacute;klad pro dalš&iacute; bloky. Čas uk&aacute;že, kter&yacute; z těchto bloků bude nakonec t&iacute;m jedin&yacute;m spr&aacute;vn&yacute;m, a to, protože se Bitcoinov&aacute; s&iacute;ť ř&iacute;d&iacute; takzvan&yacute;m *Nakamotov&yacute;m konsenzem*. Ten spoč&iacute;v&aacute; v tom, že uzly mus&iacute; vždy akceptovat nejsilnějš&iacute; řetězec důkazu o vykonané pr&aacute;ci (blockchain s nejv&iacute;ce platn&yacute;mi bloky), kter&yacute; přitom nijak neporušuje ostatn&iacute; podm&iacute;nky Bitcoinové s&iacute;tě.

&nbsp;

> Př&iacute;mo u generuj&iacute;c&iacute; coinbase transakce je nastaven čas, až po kterém bude možné bitcoiny z adresy utratit (takzvan&yacute; *timelock*).
>
>
> &nbsp;

Dalš&iacute; blok tak rozhodne, kter&aacute; verze blockchainu je ta spr&aacute;vn&aacute;. Pokud jej vytěž&iacute; těžař, kter&yacute; akceptoval blok od těžaře A a vytvoř&iacute; tak silnějš&iacute; důkaz pr&aacute;ce, ostatn&iacute; těžaři a nody jej mus&iacute; považovat jako jedin&yacute; spr&aacute;vn&yacute; blockchain. Ovšem co se stane s blokem těžaře B, kter&yacute; akceptovala č&aacute;st Bitcoinové s&iacute;tě? Odpověď zn&iacute; jasně, mus&iacute; provést takzvan&yacute; *reorg*, tj. reorganizaci bloků v blockchainu. Z bloku těžaře A se stane blok, kter&yacute; je souč&aacute;st&iacute; jediného spr&aacute;vného řetězce bloků, jenž mus&iacute; všechny nody (tedy i ostatn&iacute; těžaři) uznat platn&yacute;m, zat&iacute;mco blok těžaře B se stane takzvan&yacute;m *osiřel&yacute;m blokem* (*orphan block*). A těžba pokračuje pozvolně d&aacute;l, dokud nenastane stejn&aacute; situace znova.

&nbsp;

Avšak co se stane s odměnou těžařů A a B? Přece oba tito těžaři vytvořili validn&iacute; blok s platnou coinbase transakc&iacute;, tud&iacute;ž mus&iacute;, jak těžař A, tak i těžař B dostat odměnu, anebo ne? Bitcoin je z hlediska technologického fungov&aacute;n&iacute; naprosto geni&aacute;ln&iacute;, a i tento problém brilantn&iacute;m způsobem řeš&iacute;, a to s pomoc&iacute; takzvaného *maturation time* (doby zr&aacute;n&iacute;). Př&iacute;mo u generuj&iacute;c&iacute; coinbase transakce je nastaven čas, až po kterém bude možné bitcoiny z adresy utratit (takzvan&yacute; *timelock*). Tento čas je *100 Bitcoinov&yacute;ch bloků*, tedy zhruba nějak&yacute;ch 17 hodin. Tedy až po 100 bloc&iacute;ch může těžař utr&aacute;cet svoje nově vytěžené bitcoiny, č&iacute;mž se eliminuj&iacute; problémy spojené s reorganizac&iacute; Bitcoinoc&yacute;ch bloků.

&nbsp;

> Ovšem každé zhruba *4 roky* (respektive *210 000 bloků*) se tato odměna snižuje, a to přesně o polovinu.
>
>
> &nbsp;

A teď ještě něco k odměně těžařů. Tato odměna byla ze zač&aacute;tku (od genesis bloku, tj. roku 2009) 50 bitcoinů za jeden vytěžen&yacute; blok. Ovšem každé zhruba *4 roky* (respektive *210 000 bloků*) se tato odměna snižuje, a to přesně o polovinu. Půlen&iacute; odměny těžařů ř&iacute;k&aacute;me *halving*. Prvn&iacute; halving nastal v listopadu roku 2012 a sn&iacute;žil odměnu na 25 bitcoinů za blok. Dnes čin&iacute; odměna 6,25 bitcoinů a dalš&iacute; halving nastane už v březnu roku 2024. Takto se bude postupně snižovat odměna za těžbu až se dostaneme k roku *2140*, kdy se vytěž&iacute; posledn&iacute; *20 999 999,9769.* mince a od této chv&iacute;le již nebudou vznikat ž&aacute;dné nové bitcoiny.
