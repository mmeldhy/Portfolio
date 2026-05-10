---
title: Mengamankan Jaringan IoT: Studi Kasus dengan Wireshark dan Snort
date: 2025-03-22
excerpt: Panduan praktis menganalisis dan mengamankan trafik IoT menggunakan Wireshark untuk inspeksi paket dan Snort sebagai Intrusion Detection System.
tags: IoT, Networking, Wireshark, Snort
---

## Mengapa IoT Rentan?

Perangkat IoT seringkali memiliki:
- **Firmware yang tidak diupdate** secara reguler
- **Protokol komunikasi lemah** (plaintext HTTP, MQTT tanpa auth)
- **Default credentials** yang tidak pernah diganti
- **Resource terbatas** sehingga tidak bisa menjalankan enkripsi berat

## Setup Lab dengan Wireshark

Untuk menganalisis trafik IoT, pertama kita perlu capture interface yang tepat:

```bash
# List semua interface
wireshark -D

# Capture pada interface tertentu dengan filter
wireshark -i eth0 -f "host 192.168.1.100"
```

### Filter Berguna untuk IoT

```
# MQTT traffic
tcp.port == 1883

# CoAP (UDP-based IoT protocol)  
udp.port == 5683

# Telnet (red flag!)
tcp.port == 23

# Perangkat dengan banyak koneksi ke satu IP
ip.src == 192.168.1.0/24 && tcp.flags.syn == 1
```

## Mendeteksi Anomali dengan Snort

Contoh rule Snort untuk mendeteksi komunikasi IoT yang mencurigakan:

```
# Deteksi Telnet (protokol tidak aman)
alert tcp any any -> $HOME_NET 23 (msg:"TELNET Connection Attempt"; 
  flow:to_server,established; sid:1000001; rev:1;)

# Deteksi MQTT tanpa auth
alert tcp $HOME_NET any -> any 1883 (msg:"MQTT Unencrypted"; 
  content:"CONNECT"; depth:10; sid:1000002; rev:1;)
```

## Kesimpulan

Keamanan IoT bukan pilihan, tapi keharusan. Dengan Wireshark untuk inspeksi dan Snort untuk deteksi real-time, kita bisa membangun defense yang solid untuk jaringan IoT.
