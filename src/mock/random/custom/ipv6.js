function generatePart () {
    var symbols = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f"
    ];

    return (
        symbols[Math.floor(Math.random() * symbols.length)] +
        symbols[Math.floor(Math.random() * symbols.length)] +
        symbols[Math.floor(Math.random() * symbols.length)] +
        symbols[Math.floor(Math.random() * symbols.length)]
    );
}
function generateIpv6 () {
    var size = 8;
    var address = []

    for (var i = 0; i < size; i++) {
        address.push(generatePart())
    }

    return address.join(":");
}

module.exports = {
    ipv6: function() {
        return generateIpv6()
    },
}
