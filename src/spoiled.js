
new Schema('spoiled:spoil_recipe')
    .simpleKey('result', 'outputItem')
    .simpleKey('ingredient', 'inputItem')
    .simpleKey('spoiltime', 'intNumber')