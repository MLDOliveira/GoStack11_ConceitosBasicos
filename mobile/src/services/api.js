import axios from 'axios';

/**
 * iOS com Emulador: localhost
 * iOs com físico: IP da máqiuna
 * Android com Emulador: localhost (adb reverse)
 * Android com Emulador: 10.0.2.2 (Android Studio)
 * Android com Emulador: 10.0.3.2 (Genymotion)
 * Android com físico: IP da máquina
 */

const api = axios.create({
  //baseURL: '192.168.1.3:3333'
  baseURL: 'http://10.0.2.2:3333'
});

export default api;