    let status = document.getElementById("status")
        let result = document.getElementById("result")

        status.innerText = 'Order is pending......'
        let orderFood = new Promise((resolve, reject) => {

            let food = true;
            setTimeout(function () {
                if (food) {
                    resolve('food is ready')
                }
                else {
                    reject('food is not ready')
                }
            }, 3000)
        })
        orderFood.then((msg) => {
            status.innerText = msg
            result.innerText = 'Enjoy your meal!'
        }).catch((error) => {
            status.innerText = error
        })
        function myApp() {
            console.log('Hello m')
        }
