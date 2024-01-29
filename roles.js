import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';

Meteor.methods({
  'roles.setRole'(userId, role) {
    Roles.setUserRoles(userId, role);
  }
});
