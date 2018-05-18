Meteor.startup(() => {
	Factory.define("message", Messages, {
		text: () => Fake.sentence(),
		user: Meteor.users.findOne()._id,
		timestamp: Date.now(),
		channel: 'general'
	});

	Messages.remove({});

	if (Messages.find().count() === 0) {
		_(5).times(() => {
			Factory.create("message");
		});
	}
});