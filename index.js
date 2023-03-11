function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Accept': "application/json",
        },
        body: JSON.stringify({
            name: 'Steve',
            email: 'steve@steve.com',
        })

    })
        .then(function (res) {
            return res.json()
        })
        .then(function (user) {
            console.log(user)
            document.body.append(user.id)
            document.body.append(user.email)
        })
        .catch(function(error) {
            alert("request to http://localhost:3000/users failed, reason: Unauthorized Access");
            console.log(error.message)
            document.body.append(error.message)
        })
    }
fetch("http://localhost:3000/users", submitData)