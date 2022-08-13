---
layout: post
title: BtcPayServer a crowdfunding
date: 2022-07-08 00:00:00
description: >-
  Služba BtcPayServer umožňuje fungování technologie crowdfunding. V tomto
  článku se dozvíte, proč tato implementace crowdfundingu neřeší ten problém, co
  crowdfunding řešit má.
author: Štěpán Drábek
featured: true
categories:
  - bitcoin
  - lightning network
featured_image: /uploads/btcpayserver-a-crowdfunding.png
download: btcpayserver-a-crowdfunding.pdf
seo:
  title: BtcPayServer a crowdfunding
  description:
  social_image:
  twitter_card:
  keywords: Bitcoin, Lightning Network, crowdfunding, economy, BTCpay server
  hide-from-google: false
_comments:
  title: Max 70 characters
  social_image: landscape 1200 x 600px
---
[<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">BtcPayServer</font></font>](https://btcpayserver.org/){: target="_blank" rel="noopener"}

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> je služba, kter&aacute; je možn&eacute; přij&iacute;mat bitcoin </font></font>

*<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">on-chain</font></font>*

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Lightning </font></font>

*<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Network</font></font>*

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ) bez použit&iacute; třet&iacute; strany (stač&iacute; pouze st&aacute;hnout software na vlastn&iacute; </font></font>

*<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node</font></font>*

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ). </font></font>

*<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Crowdfunding</font></font>*

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> je způsob kolektivn&iacute;ho financov&aacute;n&iacute;, kter&yacute; může eliminovat probl&eacute;m čern&eacute;ho pasaž&eacute;ra u veřejn&yacute;ch statků pomoc&iacute; selektivn&iacute;ch podnětů (v&iacute;ce viz&nbsp; </font></font>[<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">zde</font></font>](https://ekonomie-jednoduse.com/posts/2022/verejne-statky){: target="_blank" rel="noopener"}

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">).</font></font>

> <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Dnes nen&iacute; možn&eacute; ve </font></font>
>
> *<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">v&yacute;dajov&eacute;m skriptu</font></font>*
>
> <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> bitcoinov&eacute; transakce nastavit, že když se v crowdfundingov&eacute; nevybere dostatek peněz, </font></font>
>
> *<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vr&aacute;t&iacute;</font></font>*
>
> <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> se zpět k lidem, kteř&iacute; se rozhodli pomoci financovat kampaň onen projekt.</font></font>

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jako v&scaron;echny crowdundingov&eacute; platformy jsou založeny na technologii </font></font>

*<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">v&scaron;e nebo nic</font></font>*

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> , spoč&iacute;vaj&iacute;c&iacute; v tom, že když se v dan&eacute; kampani nevybere požadovan&aacute; c&iacute;lov&aacute; č&aacute;stka, pen&iacute;ze se vr&aacute;t&iacute; zpět k jednotliv&yacute;m přispěvatelům. </font><font style="vertical-align: inherit;">T&iacute;m miz&iacute; n&aacute;klady v podobě nedostatku informac&iacute; spojen&yacute;ch s volbou ostatn&iacute;ch. </font><font style="vertical-align: inherit;">V momentě, kdy o &uacute;spě&scaron;nosti kampaně nerozhoduje pouze Va&scaron;e volba přispět, ale i volba ostatn&iacute;ch, kter&eacute; nezn&aacute;te, je z hlediska </font></font>[<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">teorie jej&iacute; </font></font>](https://cs.wikipedia.org/wiki/Teorie_her){: target="_blank" rel="noopener"} [<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">dominantn&iacute; strategie</font></font>](https://cs.wikipedia.org/wiki/Dominantn%C3%AD_strategie){: target="_blank" rel="noopener"}

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> nepřich&aacute;z&iacute; i </font></font>[<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Shellingov&yacute;m (ohniskov&yacute;m) bodem</font></font>](https://en.wikipedia.org/wiki/Focal_point_&#40;game_theory&#41;){: target="_blank" rel="noopener"}

<font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> na dan&yacute; projektspět. </font><font style="vertical-align: inherit;">Strategie or nic n&aacute;klady spojen&eacute; s t&iacute;mto probl&eacute;mem all.</font></font>

Proč je to ale u Bitcoinu problém? Bitcoin jako takov&yacute; umožnuje vytv&aacute;řet pouze velmi jednoduché *smart kontrakty* (*multisig* či *timelock* transakce). Dnes nen&iacute; možné ve *spendovac&iacute;m skriptu* bitcoinové transakce nastavit, že když se v crowdfundingové kampani nevybere dostatek peněz, *sats* se vr&aacute;t&iacute; zpět k lidem, kteř&iacute; se rozhodli pomoci financovat onen projekt. A smart kontrakty tento problém ani vyřešit nelze, protože nedok&aacute;ž&iacute; komunikovat s re&aacute;ln&yacute;m světem (viz [the oracle problem](https://en.wikipedia.org/wiki/Test_oracle){: target="_blank" rel="noopener"}). Kvůli tomu, že maj&iacute; jednotliv&iacute; uživatelé v decentralizovaném světě tendenci si vz&aacute;jemně nedůvěřovat, pokud prospěch z jejich rozhodnut&iacute; př&iacute;mo z&aacute;vis&iacute; na rozhodnut&iacute;ch ostatn&iacute;ch, vybere se v těchto kampan&iacute;ch méně peněz (*ceteris paribus*) než při stejném způsobu financov&aacute;n&iacute; s technologi&iacute; all or nothing.

> BtcPayServer je skvěl&aacute; služba, kter&aacute; v&yacute;razně snižuje n&aacute;klady na přij&iacute;m&aacute;n&iacute; bitcoinu bez jakéhokoliv prostředn&iacute;ka, zkr&aacute;tka tak, jak byl Bitcoin navržen – P2P digit&aacute;ln&iacute; pen&iacute;ze.

Řešen&iacute;? *Multisig*, *escrow*. Tedy vytvořen&iacute; adresy, z n&iacute;ž bude možné utr&aacute;cet *UTXOs* pouze s poskytnut&iacute;m v&iacute;ce než jednoho *digit&aacute;ln&iacute;ho podpisu*. *Priv&aacute;tn&iacute; kl&iacute;č* k *adrese* by tak měl jak člověk, kter&yacute; se snaž&iacute; vybrat dostatek finančn&iacute;ch zdrojů, každ&yacute; jeden přispěvatel, tak i samotn&aacute; platforma (v tomto př&iacute;padě BtcPayServer). Ovšem to jde proti hlavn&iacute; myšlence BtcPayServeru, tedy *P2P* službě přij&iacute;m&aacute;n&iacute; btc bez jakékoliv třet&iacute; strany. Tudy tedy cesta nevede… Dalš&iacute;m možn&yacute;m řešen&iacute;m je v crowdfundingové kampani nastavit větš&iacute; rozsah jednotliv&yacute;ch c&iacute;lů, např&iacute;klad, pokud se vybere 10 sats, tyto pen&iacute;ze budou využity na X, pokud 100 sats, tak na Y, pokud 1000, tak na Z… A to by skutečně mohlo b&yacute;t řešen&iacute;m toho problému, že se v př&iacute;padě ne&uacute;spěchu kolektivn&iacute;ho financov&aacute;n&iacute; u BtcPayServer nevr&aacute;t&iacute; bitcoiny zpět na adresy přispěvatelů, a tato *informačn&iacute; asymetrie* demotivuje některé potenci&aacute;ln&iacute; přispěvatele projektu finančně pomoci. Ale m&aacute; to jeden h&aacute;ček, ne všechny projekty lze takto šk&aacute;lovat. Pokud potřebuji na realizaci určité činnosti vybrat (minim&aacute;lně) přesně 100 sats, 10 sats mi v uskutečněn&iacute; tohoto projektu nepomůže a bylo by ž&aacute;douc&iacute;, kdyby se tyto prostředky vr&aacute;tily zpět k přispěvatelům.

> Řešen&iacute;m může b&yacute;t větš&iacute; šk&aacute;la různ&yacute;ch způsobů realizace projektu, ovšem tu nelze implementovat u vešker&yacute;ch projektů.

BtcPayServer je skvěl&aacute; služba, kter&aacute; v&yacute;razně snižuje n&aacute;klady na přij&iacute;m&aacute;n&iacute; bitcoinu bez jakéhokoliv prostředn&iacute;ka, zkr&aacute;tka tak, jak byl Bitcoin navržen – P2P digit&aacute;ln&iacute; pen&iacute;ze. Služba crowdfundingu, kterou BtcPayServer poskytuje však neřeš&iacute; jeden z hlavn&iacute;ch problémů, co crowdfunding řešit m&aacute; – eliminovat n&aacute;klady spojené se z&aacute;vislost&iacute; rozhodnut&iacute; jednotlivce na rozhodnut&iacute;ch ostatn&iacute;ch lid&iacute;, které nezn&aacute; a přirozeně nem&aacute; sklon k tomu, jim důvěřovat. Řešen&iacute;m může b&yacute;t větš&iacute; šk&aacute;la různ&yacute;ch způsobů realizace projektu, ovšem tu nelze implementovat u vešker&yacute;ch projektů. BtcPayServer může ale skvěle sloužit k charitativn&iacute;m &uacute;čelům (viz třeba [https://bitcoinsmiles.org/](https://bitcoinsmiles.org/){: target="_blank" rel="noopener"}), kde nen&iacute; nutné vybrat jednu konkrétn&iacute; sumu, s pomoc&iacute; využit&iacute; Lightning Network je totiž možné na charitu přispět již od p&aacute;r satoshi, tedy opravdu malé sumy (v ř&aacute;dech jednotek haléřů).