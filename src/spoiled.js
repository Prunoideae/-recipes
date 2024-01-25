
new Schema('spoiled:spoil_recipe')
    .simpleKey('ingredient', 'inputItem')
    .simpleKey('spoiltime', 'intNumber', 40)
    .simpleKey('result', 'outputItem', OutputItem.of("rotten_flesh", 1))
