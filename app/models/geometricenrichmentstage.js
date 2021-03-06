import DS from 'ember-data';

export
default DS.Model.extend({
    name: DS.attr('string', {
        defaultValue: 'editor.geometric-enrichment'
    }),

    enrichments: DS.hasMany('geometricenrichment', {
        async: true
    }),

    session: DS.belongsTo('session', {
        async: true
    }),

    createdAt: DS.attr('date'),
    updatedAt: DS.attr('date')
});