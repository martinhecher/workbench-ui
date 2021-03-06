import Ember from 'ember';
import IfcMetadataAPI from 'workbench-ui/bindings/api-ifcmetadata';

export
default Ember.Component.extend({
    actions: {
        update: function(file) {
            console.log('updating physical asset for file: ' + file);

            this.set('isLoading', true);

            var metadataAPI = new IfcMetadataAPI(),
                controller = this;

            metadataAPI.getMetadataFor({
                path: file
            }).then(function(md) {
                var digitalObject = controller.get('model');
                digitalObject.set('instance', md.digitalObject.instance);

                controller.set('isLoading', false);
            });
        }
    },

    filename: function() {
        return this.get('model.file').split('/').pop();
    }.property('model')
});