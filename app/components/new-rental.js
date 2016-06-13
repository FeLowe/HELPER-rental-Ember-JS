import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,
  actions: {
    rentalFormShow(){
      this.set('addNewRental', true);
    },

    save1() {
      var params = {
        owner: this.get('owner') === undefined ? "undefined" : this.get('owner'),
        city: this.get('city'),
        type: this.get('type') === undefined ? "undefined" : this.get('type'),
        image: this.get('image') === undefined ? "undefined" : this.get('image'),
        bedrooms: this.get('bedrooms') === undefined ? "undefined" : this.get('bedrooms'),
        cost: parseInt(this.get('cost'))
      };
      this.set('addNewRental', false);
      this.sendAction('save2', params);
    }
  }
});
