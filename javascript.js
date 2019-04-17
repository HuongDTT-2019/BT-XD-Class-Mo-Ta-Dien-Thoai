function Mobile(pin, name) {
    this.pin = pin;
    this.message = '';
    this.inbox = [];
    this.outbox = [];
    this.status = false;
    this.name = name;
    this.setStatus = function (status) {
        this.status = status;
    };
    this.getStatus = function () {
        return this.status;
    };
    this.Charge = function (pin) {
        while (this.pin < 100) {
            this.pin++;
        }
    };

    this.setMessage = function (new_message) {
        this.message = new_message;
        this.pin--;
    };
    this.sendMessage = function (phone) {
        this.outbox.push(this.message);
        phone.inbox.push(this.message);
        this.pin--;
    };

    this.readInbox = function () {
        this.pin--;
        return this.inbox;
    }

}

let samsung = new Mobile(80, "Samsung");
let iphone = new Mobile(50, "Iphone");
let status1 = samsung.getStatus();
console.log(status1);
if (!status1) {
    samsung.setStatus(true);
    console.log(samsung.getStatus());
    samsung.setMessage("Hello");
    samsung.sendMessage(iphone);

    samsung.setMessage("Hello222");
    samsung.sendMessage(iphone);

    console.log(iphone.readInbox());

    console.log("Power: " + samsung.pin);
    samsung.Charge();
    console.log("Sac pin...");
    console.log("Power: " + samsung.pin);
    samsung.setStatus(false);
    console.log(samsung.getStatus());
}







