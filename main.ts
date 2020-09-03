input.onButtonPressed(Button.AB, function () {
    // 發送自己名字
    radio.sendString("NewLife")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.showNumber(radio.receivedPacket(RadioPacketProperty.SignalStrength))
})
// 按照各組別設定
radio.setGroup(1)
