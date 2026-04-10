// 第一组ER动词数据 (1-25)
const firstGroupVerbsPart1 = [
    {
        infinitif: 'parler',
        meaning: '说话',
        group: '第一组 (-er)',
        conjugations: {
            present: ['parle', 'parles', 'parle', 'parlons', 'parlez', 'parlent'],
            passe_compose: ['ai parlé', 'as parlé', 'a parlé', 'avons parlé', 'avez parlé', 'ont parlé'],
            imparfait: ['parlais', 'parlais', 'parlait', 'parlions', 'parliez', 'parlaient'],
            futur_simple: ['parlerai', 'parleras', 'parlera', 'parlerons', 'parlerez', 'parleront'],
            conditionnel: ['parlerais', 'parlerais', 'parlerait', 'parlerions', 'parleriez', 'parleraient'],
            subjonctif: ['parle', 'parles', 'parle', 'parlions', 'parliez', 'parlent']
        }
    },
    {
        infinitif: 'donner',
        meaning: '给',
        group: '第一组 (-er)',
        conjugations: {
            present: ['donne', 'donnes', 'donne', 'donnons', 'donnez', 'donnent'],
            passe_compose: ['ai donné', 'as donné', 'a donné', 'avons donné', 'avez donné', 'ont donné'],
            imparfait: ['donnais', 'donnais', 'donnait', 'donnions', 'donniez', 'donnaient'],
            futur_simple: ['donnerai', 'donneras', 'donnera', 'donnerons', 'donnerez', 'donneront'],
            conditionnel: ['donnerais', 'donnerais', 'donnerait', 'donnerions', 'donneriez', 'donneraient'],
            subjonctif: ['donne', 'donnes', 'donne', 'donnions', 'donniez', 'donnent']
        }
    },
    {
        infinitif: 'travailler',
        meaning: '工作',
        group: '第一组 (-er)',
        conjugations: {
            present: ['travaille', 'travailles', 'travaille', 'travaillons', 'travaillez', 'travaillent'],
            passe_compose: ['ai travaillé', 'as travaillé', 'a travaillé', 'avons travaillé', 'avez travaillé', 'ont travaillé'],
            imparfait: ['travaillais', 'travaillais', 'travaillait', 'travaillions', 'travailliez', 'travaillaient'],
            futur_simple: ['travaillerai', 'travailleras', 'travaillera', 'travaillerons', 'travaillerez', 'travailleront'],
            conditionnel: ['travaillerais', 'travaillerais', 'travaillerait', 'travaillerions', 'travailleriez', 'travailleraient'],
            subjonctif: ['travaille', 'travailles', 'travaille', 'travaillions', 'travailliez', 'travaillent']
        }
    },
    {
        infinitif: 'aimer',
        meaning: '爱，喜欢',
        group: '第一组 (-er)',
        conjugations: {
            present: ['aime', 'aimes', 'aime', 'aimons', 'aimez', 'aiment'],
            passe_compose: ['ai aimé', 'as aimé', 'a aimé', 'avons aimé', 'avez aimé', 'ont aimé'],
            imparfait: ['aimais', 'aimais', 'aimait', 'aimions', 'aimiez', 'aimaient'],
            futur_simple: ['aimerai', 'aimeras', 'aimera', 'aimerons', 'aimerez', 'aimeront'],
            conditionnel: ['aimerais', 'aimerais', 'aimerait', 'aimerions', 'aimeriez', 'aimeraient'],
            subjonctif: ['aime', 'aimes', 'aime', 'aimions', 'aimiez', 'aiment']
        }
    },
    {
        infinitif: 'regarder',
        meaning: '看',
        group: '第一组 (-er)',
        conjugations: {
            present: ['regarde', 'regardes', 'regarde', 'regardons', 'regardez', 'regardent'],
            passe_compose: ['ai regardé', 'as regardé', 'a regardé', 'avons regardé', 'avez regardé', 'ont regardé'],
            imparfait: ['regardais', 'regardais', 'regardait', 'regardions', 'regardiez', 'regardaient'],
            futur_simple: ['regarderai', 'regarderas', 'regardera', 'regarderons', 'regarderez', 'regarderont'],
            conditionnel: ['regarderais', 'regarderais', 'regarderait', 'regarderions', 'regarderiez', 'regarderaient'],
            subjonctif: ['regarde', 'regardes', 'regarde', 'regardions', 'regardiez', 'regardent']
        }
    },
    {
        infinitif: 'porter',
        meaning: '携带，穿',
        group: '第一组 (-er)',
        conjugations: {
            present: ['porte', 'portes', 'porte', 'portons', 'portez', 'portent'],
            passe_compose: ['ai porté', 'as porté', 'a porté', 'avons porté', 'avez porté', 'ont porté'],
            imparfait: ['portais', 'portais', 'portait', 'portions', 'portiez', 'portaient'],
            futur_simple: ['porterai', 'porteras', 'portera', 'porterons', 'porterez', 'porteront'],
            conditionnel: ['porterais', 'porterais', 'porterait', 'porterions', 'porteriez', 'porteraient'],
            subjonctif: ['porte', 'portes', 'porte', 'portions', 'portiez', 'portent']
        }
    },
    {
        infinitif: 'commencer',
        meaning: '开始',
        group: '第一组 (-er)',
        conjugations: {
            present: ['commence', 'commences', 'commence', 'commençons', 'commencez', 'commencent'],
            passe_compose: ['ai commencé', 'as commencé', 'a commencé', 'avons commencé', 'avez commencé', 'ont commencé'],
            imparfait: ['commençais', 'commençais', 'commençait', 'commencions', 'commenciez', 'commençaient'],
            futur_simple: ['commencerai', 'commenceras', 'commencera', 'commencerons', 'commencerez', 'commenceront'],
            conditionnel: ['commencerais', 'commencerais', 'commencerait', 'commencerions', 'commenceriez', 'commenceraient'],
            subjonctif: ['commence', 'commences', 'commence', 'commencions', 'commenciez', 'commencent']
        }
    },
    {
        infinitif: 'arriver',
        meaning: '到达',
        group: '第一组 (-er)',
        conjugations: {
            present: ['arrive', 'arrives', 'arrive', 'arrivons', 'arrivez', 'arrivent'],
            passe_compose: ['suis arrivé', 'es arrivé', 'est arrivé', 'sommes arrivés', 'êtes arrivés', 'sont arrivés'],
            imparfait: ['arrivais', 'arrivais', 'arrivait', 'arrivions', 'arriviez', 'arrivaient'],
            futur_simple: ['arriverai', 'arriveras', 'arrivera', 'arriverons', 'arriverez', 'arriveront'],
            conditionnel: ['arriverais', 'arriverais', 'arriverait', 'arriverions', 'arriveriez', 'arriveraient'],
            subjonctif: ['arrive', 'arrives', 'arrive', 'arrivions', 'arriviez', 'arrivent']
        }
    },
    {
        infinitif: 'chanter',
        meaning: '唱歌',
        group: '第一组 (-er)',
        conjugations: {
            present: ['chante', 'chantes', 'chante', 'chantons', 'chantez', 'chantent'],
            passe_compose: ['ai chanté', 'as chanté', 'a chanté', 'avons chanté', 'avez chanté', 'ont chanté'],
            imparfait: ['chantais', 'chantais', 'chantait', 'chantions', 'chantiez', 'chantaient'],
            futur_simple: ['chanterai', 'chanteras', 'chantera', 'chanterons', 'chanterez', 'chanteront'],
            conditionnel: ['chanterais', 'chanterais', 'chanterait', 'chanterions', 'chanteriez', 'chanteraient'],
            subjonctif: ['chante', 'chantes', 'chante', 'chantions', 'chantiez', 'chantent']
        }
    },
    {
        infinitif: 'jouer',
        meaning: '玩，演奏',
        group: '第一组 (-er)',
        conjugations: {
            present: ['joue', 'joues', 'joue', 'jouons', 'jouez', 'jouent'],
            passe_compose: ['ai joué', 'as joué', 'a joué', 'avons joué', 'avez joué', 'ont joué'],
            imparfait: ['jouais', 'jouais', 'jouait', 'jouions', 'jouiez', 'jouaient'],
            futur_simple: ['jouerai', 'joueras', 'jouera', 'jouerons', 'jouerez', 'joueront'],
            conditionnel: ['jouerais', 'jouerais', 'jouerait', 'jouerions', 'joueriez', 'joueraient'],
            subjonctif: ['joue', 'joues', 'joue', 'jouions', 'jouiez', 'jouent']
        }
    },
    {
        infinitif: 'manger',
        meaning: '吃',
        group: '第一组 (-er)',
        conjugations: {
            present: ['mange', 'manges', 'mange', 'mangeons', 'mangez', 'mangent'],
            passe_compose: ['ai mangé', 'as mangé', 'a mangé', 'avons mangé', 'avez mangé', 'ont mangé'],
            imparfait: ['mangeais', 'mangeais', 'mangeait', 'mangions', 'mangiez', 'mangeaient'],
            futur_simple: ['mangerai', 'mangeras', 'mangera', 'mangerons', 'mangerez', 'mangeront'],
            conditionnel: ['mangerais', 'mangerais', 'mangerait', 'mangerions', 'mangeriez', 'mangeraient'],
            subjonctif: ['mange', 'manges', 'mange', 'mangions', 'mangiez', 'mangent']
        }
    },
    {
        infinitif: 'nager',
        meaning: '游泳',
        group: '第一组 (-er)',
        conjugations: {
            present: ['nage', 'nages', 'nage', 'nageons', 'nagez', 'nagent'],
            passe_compose: ['ai nagé', 'as nagé', 'a nagé', 'avons nagé', 'avez nagé', 'ont nagé'],
            imparfait: ['nageais', 'nageais', 'nageait', 'nagions', 'nagiez', 'nageaient'],
            futur_simple: ['nagerai', 'nageras', 'nagera', 'nagerons', 'nagerez', 'nageront'],
            conditionnel: ['nagerais', 'nagerais', 'nagerait', 'nagerions', 'nageriez', 'nageraient'],
            subjonctif: ['nage', 'nages', 'nage', 'nagions', 'nagiez', 'nagent']
        }
    },
    {
        infinitif: 'marcher',
        meaning: '走路',
        group: '第一组 (-er)',
        conjugations: {
            present: ['marche', 'marches', 'marche', 'marchons', 'marchez', 'marchent'],
            passe_compose: ['ai marché', 'as marché', 'a marché', 'avons marché', 'avez marché', 'ont marché'],
            imparfait: ['marchais', 'marchais', 'marchait', 'marchions', 'marchiez', 'marchaient'],
            futur_simple: ['marcherai', 'marcheras', 'marchera', 'marcherons', 'marcherez', 'marcheront'],
            conditionnel: ['marcherais', 'marcherais', 'marcherait', 'marcherions', 'marcheriez', 'marcheraient'],
            subjonctif: ['marche', 'marches', 'marche', 'marchions', 'marchiez', 'marchent']
        }
    },
    {
        infinitif: 'payer',
        meaning: '支付',
        group: '第一组 (-er)',
        conjugations: {
            present: ['paie', 'paies', 'paie', 'payons', 'payez', 'paient'],
            passe_compose: ['ai payé', 'as payé', 'a payé', 'avons payé', 'avez payé', 'ont payé'],
            imparfait: ['payais', 'payais', 'payait', 'payions', 'payiez', 'payaient'],
            futur_simple: ['payerai', 'payeras', 'payera', 'payerons', 'payerez', 'payeront'],
            conditionnel: ['payerais', 'payerais', 'payerait', 'payerions', 'payeriez', 'payeraient'],
            subjonctif: ['paie', 'paies', 'paie', 'payions', 'payiez', 'paient']
        }
    },
    {
        infinitif: 'préférer',
        meaning: '更喜欢',
        group: '第一组 (-er)',
        conjugations: {
            present: ['préfère', 'préfères', 'préfère', 'préférons', 'préférez', 'préfèrent'],
            passe_compose: ['ai préféré', 'as préféré', 'a préféré', 'avons préféré', 'avez préféré', 'ont préféré'],
            imparfait: ['préférais', 'préférais', 'préférait', 'préférions', 'préfériez', 'préféraient'],
            futur_simple: ['préférerai', 'préféreras', 'préférera', 'préférerons', 'préférerez', 'préféreront'],
            conditionnel: ['préférerais', 'préférerais', 'préférerait', 'préférerions', 'préféreriez', 'préféreraient'],
            subjonctif: ['préfère', 'préfères', 'préfère', 'préférions', 'préfériez', 'préfèrent']
        }
    },
    {
        infinitif: 'répéter',
        meaning: '重复',
        group: '第一组 (-er)',
        conjugations: {
            present: ['répète', 'répètes', 'répète', 'répétons', 'répétez', 'répètent'],
            passe_compose: ['ai répété', 'as répété', 'a répété', 'avons répété', 'avez répété', 'ont répété'],
            imparfait: ['répétais', 'répétais', 'répétait', 'répétions', 'répétiez', 'répétaient'],
            futur_simple: ['répéterai', 'répéteras', 'répétera', 'répéterons', 'répéterez', 'répéteront'],
            conditionnel: ['répéterais', 'répéterais', 'répéterait', 'répéterions', 'répéteriez', 'répéteraient'],
            subjonctif: ['répète', 'répètes', 'répète', 'répétions', 'répétiez', 'répètent']
        }
    },
    {
        infinitif: 'révéler',
        meaning: '揭示',
        group: '第一组 (-er)',
        conjugations: {
            present: ['révèle', 'révèles', 'révèle', 'révétons', 'révétez', 'révèlent'],
            passe_compose: ['ai révélé', 'as révélé', 'a révélé', 'avons révélé', 'avez révélé', 'ont révélé'],
            imparfait: ['révélais', 'révélais', 'révélait', 'révélions', 'révéliez', 'révélaient'],
            futur_simple: ['révélerai', 'révéleras', 'révélera', 'révélerons', 'révélerez', 'révéleront'],
            conditionnel: ['révélerais', 'révélerais', 'révélerait', 'révélerions', 'révéleriez', 'révéleraient'],
            subjonctif: ['révèle', 'révèles', 'révèle', 'révélions', 'révéliez', 'révèlent']
        }
    },
    {
        infinitif: 'espérer',
        meaning: '希望',
        group: '第一组 (-er)',
        conjugations: {
            present: ['espère', 'espères', 'espère', 'espérons', 'espérez', 'espèrent'],
            passe_compose: ['ai espéré', 'as espéré', 'a espéré', 'avons espéré', 'avez espéré', 'ont espéré'],
            imparfait: ['espérais', 'espérais', 'espérait', 'espérions', 'espériez', 'espéraient'],
            futur_simple: ['espérerai', 'espéreras', 'espérera', 'espérerons', 'espérerez', 'espéreront'],
            conditionnel: ['espérerais', 'espérerais', 'espérerait', 'espérerions', 'espéreriez', 'espéreraient'],
            subjonctif: ['espère', 'espères', 'espère', 'espérions', 'espériez', 'espèrent']
        }
    },
    {
        infinitif: 'envoyer',
        meaning: '发送',
        group: '第一组 (-er)',
        conjugations: {
            present: ['envoie', 'envoies', 'envoie', 'envoyons', 'envoyez', 'envoient'],
            passe_compose: ['ai envoyé', 'as envoyé', 'a envoyé', 'avons envoyé', 'avez envoyé', 'ont envoyé'],
            imparfait: ['envoyais', 'envoyais', 'envoyait', 'envoyions', 'envoyiez', 'envoyaient'],
            futur_simple: ['enverrai', 'enverras', 'enverra', 'enverrons', 'enverrez', 'enverront'],
            conditionnel: ['enverrais', 'enverrais', 'enverrait', 'enverrions', 'enverriez', 'enverraient'],
            subjonctif: ['envoie', 'envoies', 'envoie', 'envoyions', 'envoyiez', 'envoient']
        }
    },
    {
        infinitif: 'essayer',
        meaning: '尝试',
        group: '第一组 (-er)',
        conjugations: {
            present: ['essaie', 'essaies', 'essaie', 'essayons', 'essayez', 'essaient'],
            passe_compose: ['ai essayé', 'as essayé', 'a essayé', 'avons essayé', 'avez essayé', 'ont essayé'],
            imparfait: ['essayais', 'essayais', 'essayait', 'essayions', 'essayiez', 'essayaient'],
            futur_simple: ['essaierai', 'essaieras', 'essaiera', 'essaierons', 'essaieriez', 'essaieront'],
            conditionnel: ['essaierais', 'essaierais', 'essaierait', 'essaierions', 'essaieriez', 'essaieraient'],
            subjonctif: ['essaie', 'essaies', 'essaie', 'essayions', 'essayiez', 'essaient']
        }
    },
    {
        infinitif: 'lever',
        meaning: '举起',
        group: '第一组 (-er)',
        conjugations: {
            present: ['lève', 'lèves', 'lève', 'levons', 'levez', 'lèvent'],
            passe_compose: ['ai levé', 'as levé', 'a levé', 'avons levé', 'avez levé', 'ont levé'],
            imparfait: ['levais', 'levais', 'levait', 'levions', 'leviez', 'levaient'],
            futur_simple: ['lèverai', 'lèveras', 'lèvera', 'lèverons', 'lèverez', 'lèveront'],
            conditionnel: ['lèverais', 'lèverais', 'lèverait', 'lèverions', 'lèveriez', 'lèveraient'],
            subjonctif: ['lève', 'lèves', 'lève', 'levions', 'leviez', 'lèvent']
        }
    },
    {
        infinitif: 'mener',
        meaning: '带领',
        group: '第一组 (-er)',
        conjugations: {
            present: ['mène', 'mènes', 'mène', 'menons', 'menez', 'mènent'],
            passe_compose: ['ai mené', 'as mené', 'a mené', 'avons mené', 'avez mené', 'ont mené'],
            imparfait: ['menais', 'menais', 'menait', 'menions', 'meniez', 'menaient'],
            futur_simple: ['mènerai', 'mèneras', 'mènera', 'mènerons', 'mènerez', 'mèneront'],
            conditionnel: ['mènerais', 'mènerais', 'mènerait', 'mènerions', 'mèneriez', 'mèneraient'],
            subjonctif: ['mène', 'mènes', 'mène', 'menions', 'meniez', 'mènent']
        }
    },
    {
        infinitif: 'promener',
        meaning: '散步',
        group: '第一组 (-er)',
        conjugations: {
            present: ['promène', 'promènes', 'promène', 'promenons', 'promenez', 'promènent'],
            passe_compose: ['ai promené', 'as promené', 'a promené', 'avons promené', 'avez promené', 'ont promené'],
            imparfait: ['promenais', 'promenais', 'promenait', 'promenions', 'promeniez', 'promenaient'],
            futur_simple: ['promènerai', 'promèneras', 'promènera', 'promènerons', 'promènerez', 'promèneront'],
            conditionnel: ['promènerais', 'promènerais', 'promènerait', 'promènerions', 'promèneriez', 'promèneraient'],
            subjonctif: ['promène', 'promènes', 'promène', 'promenions', 'promeniez', 'promènent']
        }
    },
    {
        infinitif: 'acheter',
        meaning: '买',
        group: '第一组 (-er)',
        conjugations: {
            present: ['achète', 'achètes', 'achète', 'achetons', 'achetez', 'achètent'],
            passe_compose: ['ai acheté', 'as acheté', 'a acheté', 'avons acheté', 'avez acheté', 'ont acheté'],
            imparfait: ['achetais', 'achetais', 'achetait', 'achetions', 'achetiez', 'achetaient'],
            futur_simple: ['achèterai', 'achèteras', 'achètera', 'achèterons', 'achèterez', 'achèteront'],
            conditionnel: ['achèterais', 'achèterais', 'achèterait', 'achèterions', 'achèteriez', 'achèteraient'],
            subjonctif: ['achète', 'achètes', 'achète', 'achetions', 'achetiez', 'achètent']
        }
    },
    {
        infinitif: 'appeler',
        meaning: '叫，打电话',
        group: '第一组 (-er)',
        conjugations: {
            present: ['appelle', 'appelles', 'appelle', 'appelons', 'appelez', 'appellent'],
            passe_compose: ['ai appelé', 'as appelé', 'a appelé', 'avons appelé', 'avez appelé', 'ont appelé'],
            imparfait: ['appelais', 'appelais', 'appelait', 'appelions', 'appeliez', 'appelaient'],
            futur_simple: ['appellerai', 'appelleras', 'appellera', 'appellerons', 'appellerez', 'appelleront'],
            conditionnel: ['appellerais', 'appellerais', 'appellerait', 'appellerions', 'appelleriez', 'appelleraient'],
            subjonctif: ['appelle', 'appelles', 'appelle', 'appelions', 'appeliez', 'appellent']
        }
    }
];

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = firstGroupVerbsPart1;
}
