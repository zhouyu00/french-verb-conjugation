// 第一组 -ER 动词数据 (26-50)
const erVerbsPart2 = [
    // 26. chanter - 唱歌
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
    // 27. jouer - 玩
    {
        infinitif: 'jouer',
        meaning: '玩',
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
    // 28. nager - 游泳
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
    // 29. marcher - 走路
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
    // 30. payer - 支付
    {
        infinitif: 'payer',
        meaning: '支付',
        group: '第一组 (-er)',
        conjugations: {
            present: ['paie', 'paies', 'paie', 'payons', 'payez', 'paient'],
            passe_compose: ['ai payé', 'as payé', 'a payé', 'avons payé', 'avez payé', 'ont payé'],
            imparfait: ['payais', 'payais', 'payait', 'payions', 'payiez', 'payaient'],
            futur_simple: ['paierai', 'paieras', 'paiera', 'paierons', 'paierez', 'paieront'],
            conditionnel: ['paierais', 'paierais', 'paierait', 'paierions', 'paieriez', 'paieraient'],
            subjonctif: ['paie', 'paies', 'paie', 'payions', 'payiez', 'paient']
        }
    },
    // 31. préférer - 更喜欢
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
    // 32. répéter - 重复
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
    // 33. espérer - 希望
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
    // 34. envoyer - 发送
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
    // 35. essayer - 尝试
    {
        infinitif: 'essayer',
        meaning: '尝试',
        group: '第一组 (-er)',
        conjugations: {
            present: ['essaie', 'essaies', 'essaie', 'essayons', 'essayez', 'essaient'],
            passe_compose: ['ai essayé', 'as essayé', 'a essayé', 'avons essayé', 'avez essayé', 'ont essayé'],
            imparfait: ['essayais', 'essayais', 'essayait', 'essayions', 'essayiez', 'essayaient'],
            futur_simple: ['essaierai', 'essaieras', 'essaiera', 'essaierons', 'essaierez', 'essaieront'],
            conditionnel: ['essaierais', 'essaierais', 'essaierait', 'essaierions', 'essaieriez', 'essaieraient'],
            subjonctif: ['essaie', 'essaies', 'essaie', 'essayions', 'essayiez', 'essaient']
        }
    },
    // 36. lever - 举起
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
    // 37. mener - 带领
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
    // 38. promener - 散步
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
    // 39. acheter - 买
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
    // 40. appeler - 叫，打电话
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
    },
    // 41. jeter - 扔
    {
        infinitif: 'jeter',
        meaning: '扔',
        group: '第一组 (-er)',
        conjugations: {
            present: ['jette', 'jettes', 'jette', 'jetons', 'jetez', 'jettent'],
            passe_compose: ['ai jeté', 'as jeté', 'a jeté', 'avons jeté', 'avez jeté', 'ont jeté'],
            imparfait: ['jetais', 'jetais', 'jetait', 'jetions', 'jetiez', 'jetaient'],
            futur_simple: ['jetterai', 'jetteras', 'jettera', 'jetterons', 'jetterez', 'jetteront'],
            conditionnel: ['jetterais', 'jetterais', 'jetterait', 'jetterions', 'jetteriez', 'jetteraient'],
            subjonctif: ['jette', 'jettes', 'jette', 'jetions', 'jetiez', 'jettent']
        }
    },
    // 42. changer - 改变
    {
        infinitif: 'changer',
        meaning: '改变',
        group: '第一组 (-er)',
        conjugations: {
            present: ['change', 'changes', 'change', 'changeons', 'changez', 'changent'],
            passe_compose: ['ai changé', 'as changé', 'a changé', 'avons changé', 'avez changé', 'ont changé'],
            imparfait: ['changeais', 'changeais', 'changeait', 'changions', 'changiez', 'changeaient'],
            futur_simple: ['changerai', 'changeras', 'changera', 'changerons', 'changerez', 'changeront'],
            conditionnel: ['changerai', 'changerais', 'changerait', 'changerions', 'changeriez', 'changeraient'],
            subjonctif: ['change', 'changes', 'change', 'changions', 'changiez', 'changent']
        }
    },
    // 43. passer - 经过
    {
        infinitif: 'passer',
        meaning: '经过',
        group: '第一组 (-er)',
        conjugations: {
            present: ['passe', 'passes', 'passe', 'passons', 'passez', 'passent'],
            passe_compose: ['ai passé', 'as passé', 'a passé', 'avons passé', 'avez passé', 'ont passé'],
            imparfait: ['passais', 'passais', 'passait', 'passions', 'passiez', 'passaient'],
            futur_simple: ['passerai', 'passeras', 'passera', 'passerons', 'passerez', 'passeront'],
            conditionnel: ['passerais', 'passerais', 'passerait', 'passerions', 'passeriez', 'passeraient'],
            subjonctif: ['passe', 'passes', 'passe', 'passions', 'passiez', 'passent']
        }
    },
    // 44. montrer - 展示
    {
        infinitif: 'montrer',
        meaning: '展示',
        group: '第一组 (-er)',
        conjugations: {
            present: ['montre', 'montres', 'montre', 'montrons', 'montrez', 'montrent'],
            passe_compose: ['ai montré', 'as montré', 'a montré', 'avons montré', 'avez montré', 'ont montré'],
            imparfait: ['montrais', 'montrais', 'montrait', 'montrions', 'montriez', 'montraient'],
            futur_simple: ['montrerai', 'montreras', 'montrera', 'montrerons', 'montrerez', 'montreront'],
            conditionnel: ['montrerais', 'montrerais', 'montrerait', 'montrerions', 'montreriez', 'montreraient'],
            subjonctif: ['montre', 'montres', 'montre', 'montrions', 'montriez', 'montrent']
        }
    },
    // 45. rester - 停留
    {
        infinitif: 'rester',
        meaning: '停留',
        group: '第一组 (-er)',
        conjugations: {
            present: ['reste', 'restes', 'reste', 'restons', 'restez', 'restent'],
            passe_compose: ['suis resté', 'es resté', 'est resté', 'sommes restés', 'êtes restés', 'sont restés'],
            imparfait: ['restais', 'restais', 'restait', 'restions', 'restiez', 'restaient'],
            futur_simple: ['resterai', 'resteras', 'restera', 'resterons', 'resterez', 'resteront'],
            conditionnel: ['resterais', 'resterais', 'resterait', 'resterions', 'resteriez', 'resteraient'],
            subjonctif: ['reste', 'restes', 'reste', 'restions', 'restiez', 'restent']
        }
    },
    // 46. poser - 放置
    {
        infinitif: 'poser',
        meaning: '放置',
        group: '第一组 (-er)',
        conjugations: {
            present: ['pose', 'poses', 'pose', 'posons', 'posez', 'posent'],
            passe_compose: ['ai posé', 'as posé', 'a posé', 'avons posé', 'avez posé', 'ont posé'],
            imparfait: ['posais', 'posais', 'posait', 'posions', 'posiez', 'posaient'],
            futur_simple: ['poserai', 'poseras', 'posera', 'poserons', 'poserez', 'poseront'],
            conditionnel: ['poserais', 'poserais', 'poserait', 'poserions', 'poseriez', 'poseraient'],
            subjonctif: ['pose', 'poses', 'pose', 'posions', 'posiez', 'posent']
        }
    },
    // 47. tourner - 转动
    {
        infinitif: 'tourner',
        meaning: '转动',
        group: '第一组 (-er)',
        conjugations: {
            present: ['tourne', 'tournes', 'tourne', 'tournons', 'tournez', 'tournent'],
            passe_compose: ['ai tourné', 'as tourné', 'a tourné', 'avons tourné', 'avez tourné', 'ont tourné'],
            imparfait: ['tournais', 'tournais', 'tournait', 'tournions', 'tourniez', 'tournaient'],
            futur_simple: ['tournerai', 'tourneras', 'tournera', 'tournerons', 'tournerez', 'tourneront'],
            conditionnel: ['tournerais', 'tournerais', 'tournerait', 'tournerions', 'tourneriez', 'tourneraient'],
            subjonctif: ['tourne', 'tournes', 'tourne', 'tournions', 'tourniez', 'tournent']
        }
    },
    // 48. entrer - 进入
    {
        infinitif: 'entrer',
        meaning: '进入',
        group: '第一组 (-er)',
        conjugations: {
            present: ['entre', 'entres', 'entre', 'entrons', 'entrez', 'entrent'],
            passe_compose: ['suis entré', 'es entré', 'est entré', 'sommes entrés', 'êtes entrés', 'sont entrés'],
            imparfait: ['entrais', 'entrais', 'entrait', 'entrions', 'entriez', 'entraient'],
            futur_simple: ['entrerai', 'entreras', 'entrera', 'entrerons', 'entrerez', 'entreront'],
            conditionnel: ['entrerais', 'entrerais', 'entrerait', 'entrerions', 'entreriez', 'entreraient'],
            subjonctif: ['entre', 'entres', 'entre', 'entrions', 'entriez', 'entrent']
        }
    },
    // 49. chercher - 寻找
    {
        infinitif: 'chercher',
        meaning: '寻找',
        group: '第一组 (-er)',
        conjugations: {
            present: ['cherche', 'cherches', 'cherche', 'cherchons', 'cherchez', 'cherchent'],
            passe_compose: ['ai cherché', 'as cherché', 'a cherché', 'avons cherché', 'avez cherché', 'ont cherché'],
            imparfait: ['cherchais', 'cherchais', 'cherchait', 'cherchions', 'cherchiez', 'cherchaient'],
            futur_simple: ['chercherai', 'chercheras', 'cherchera', 'chercherons', 'chercherez', 'chercheront'],
            conditionnel: ['chercherais', 'chercherais', 'chercherait', 'chercherions', 'chercheriez', 'chercheraient'],
            subjonctif: ['cherche', 'cherches', 'cherche', 'cherchions', 'cherchiez', 'cherchent']
        }
    },
    // 50. trouver - 找到
    {
        infinitif: 'trouver',
        meaning: '找到',
        group: '第一组 (-er)',
        conjugations: {
            present: ['trouve', 'trouves', 'trouve', 'trouvons', 'trouvez', 'trouvent'],
            passe_compose: ['ai trouvé', 'as trouvé', 'a trouvé', 'avons trouvé', 'avez trouvé', 'ont trouvé'],
            imparfait: ['trouvais', 'trouvais', 'trouvait', 'trouvions', 'trouviez', 'trouvaient'],
            futur_simple: ['trouverai', 'trouveras', 'trouvera', 'trouverons', 'trouverez', 'trouveront'],
            conditionnel: ['trouverais', 'trouverais', 'trouverait', 'trouverions', 'trouveriez', 'trouveraient'],
            subjonctif: ['trouve', 'trouves', 'trouve', 'trouvions', 'trouviez', 'trouvent']
        }
    }
];

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = erVerbsPart2;
}
