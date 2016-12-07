module.exports = function(router,mongoose,User) {
// det squ fint
router.route('/register')

    //POST – bruges når man vil oprette data.
    //PUT – bruges når man vil opdatere data.
    //GET – bruges når man vil hente data.
    //DELETE – bruges når man vil slette data.
 
	.post(function(req, res) {
		var user = new User();
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.email   =  req.body.email;
        user.phone =  req.body.phone; 
        user.username =  req.body.username;
        user.password = req.body.password;

        user.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Der er oprettet et medlem!!' });
        });
	}) 
	.get
	.delete
	.put

};

// Rest api ng-module