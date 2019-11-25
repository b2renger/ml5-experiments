#include <DmxSimple.h>

const int ledPin = 13; // the pin that the LED is attached to
int incomingByte;      // a variable to read incoming serial data into

void setup() {

  Serial.begin(9600);
  DmxSimple.usePin(3);

  DmxSimple.maxChannel(16);
  // position
  DmxSimple.write(1, 125); // tourner autour de l'axe Z
  DmxSimple.write(4, 60); // tourner autour de l'axe X

  DmxSimple.write(7, 255); // dimmer doit être supérieur à 0 pour avoir de la lumière

}

void loop() {

  if (Serial.available() > 0) {
    // read the oldest byte in the serial buffer:
    incomingByte = Serial.read();

    if (incomingByte == 'A') {
      digitalWrite(ledPin, HIGH);
      DmxSimple.write(9, 0);
      DmxSimple.write(10, 0);
      DmxSimple.write(11, 0);
      Serial.println(incomingByte);
    }

    if (incomingByte == 'B') {
      digitalWrite(ledPin, LOW);
      DmxSimple.write(9, 255);
      DmxSimple.write(10, 0);
      DmxSimple.write(11, 0);
      Serial.println(incomingByte);
    }

    if (incomingByte == 'C') {
      digitalWrite(ledPin, LOW);
      DmxSimple.write(9, 0);
      DmxSimple.write(10, 255);
      DmxSimple.write(11, 0);
      Serial.println(incomingByte);
    }

    if (incomingByte == 'D') {
      digitalWrite(ledPin, LOW);
      DmxSimple.write(9, 0);
      DmxSimple.write(10, 0);
      DmxSimple.write(11, 255);
      Serial.println(incomingByte);
    }
  }
}
