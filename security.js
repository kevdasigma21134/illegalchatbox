const query = "SELECT * FROM users WHERE username = ?";
connection.query(query, [req.body.username], function (err, results) {});
