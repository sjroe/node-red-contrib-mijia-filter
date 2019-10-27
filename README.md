# node-red-contrib-mijia-filter

This Node-Red module contains the "Mijia BLE Filter" node that filters and extracts the sensor data of Mijia BLE devices obtained via [node-red-contrib-ble-scan](https://github.com/sjroe/node-red-contrib-ble-scan).


## Acknowledgements

The methodolgy and parser has been obtained from the [homebridge-mi-hygrothermograph](https://github.com/hannseman/homebridge-mi-hygrothermograph) project on GitHub.


## Installation

To install this module use Node-Red GUI installer or console command:

```
npm install node-red-contrib-mijia-filter
```

## Usage

**Input message:** **msg.payload** must be the output message from [node-red-contrib-ble-scan](https://github.com/sjroe/node-red-contrib-ble-scan).

**Output message:** **msg.payload** object that contains the following:
* _address_ - MAC address of Mijia sensor
* _data_ - object of the sensor data that may contain the following dependant on sensor type and data broadcast:
  * temperature_ - temperature from sensor
  * _battery_ - battery level in percents
  * _humidity_ - Mijia Temperature Humidity device only
  * _light_, _moisture_, _conductivity_ - MiFlora device only


## Tested With

This module has been tested with:
* MJ_HT_V1
* LYWSD02