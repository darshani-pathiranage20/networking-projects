# Home Lab Network — Virtual LAN Project
<p> Built a small home lab in VirtualBox using three Linux virtual machines to understand how real networks work. One VM was configured as a router, handling DHCP and internet access, while the other two acted as client machines on a private LAN. 

The router VM used two network adapters: one connected to NAT for internet access and another connected to an internal network to serve the LAN. A DHCP server was configured on the router so client VMs automatically received IP addresses without any manual setup. NAT was implemented using iptables to allow private IPs to access the internet.

The network was designed using a /29 subnet (192.168.1.0/29), sized efficiently for the required devices. Connectivity and behavior were verified using ping tests, ARP table inspection, and packet capture with tcpdump. All configurations were made persistent across reboots.
</p>

## Network Topology
<img width="500" height="381" alt="Network Topology" src="https://github.com/user-attachments/assets/3960ca91-470b-4c8c-bf31-efc567d64ebe" />
<img width="500" height="813" alt="vbox-setup" src="https://github.com/user-attachments/assets/abcaafb8-01a4-4c76-97a6-b8bb92b6e2e1" />

 ## What This Project Covers
 <ul>
   <li>IP Addressing & Subnetting - /29 network sized for 3 devices </li>
   <li>DHCP - Automatic IP assignment via ISC DHCP server</li>
   <li>NAT - iptables masquerading for internet sharing</li>
   <li>Routing - Linux router forwards packets between LAN and WAN</li>
   <li>ARP - MAC address resolution on local network</li>
 </ul>

 ## Network Specifications
 IP Addressing & Subnetting — Designed a /29 network (6 usable hosts) matched to the lab size
 <table border="1" cellpadding="8" cellspacing="0">
  <tr>
    <th>Item</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>Network</td>
    <td>192.168.1.0/29</td>
  </tr>
  <tr>
    <td>Subnet Mask</td>
    <td>255.255.255.248</td>
  </tr>
  <tr>
    <td>Usable Host Range</td>
    <td>192.168.1.1 – 192.168.1.6</td>
  </tr>
  <tr>
    <td>Broadcast</td>
    <td>192.168.1.7</td>
  </tr>
  <tr>
    <td>Gateway / DHCP Server</td>
    <td>192.168.1.1 (Router VM)</td>
  </tr>
  <tr>
    <td>DNS</td>
    <td>8.8.8.8, 8.8.4.4</td>
  </tr>
  <tr>
    <td>DHCP Pool</td>
    <td>192.168.1.3 – 192.168.1.6</td>
  </tr>
  <tr>
    <td>Lease Time</td>
    <td>24 hours</td>
  </tr>
</table>

### Device Table
<table border="1" cellpadding="8" cellspacing="0">
  <tr>
    <th>Device</th>
    <th>Role</th>
    <th>IP Address</th>
    <th>How Assigned</th>
  </tr>
  <tr>
    <td>Router VM</td>
    <td>Gateway, DHCP, NAT</td>
    <td>192.168.1.1</td>
    <td>Static (Manual)</td>
  </tr>
  <tr>
    <td>VM1</td>
    <td>Client</td>
    <td>192.168.1.3</td>
    <td>DHCP (Automatic)</td>
  </tr>
  <tr>
    <td>VM2</td>
    <td>Client</td>
    <td>192.168.1.4</td>
    <td>DHCP (Automatic)</td>
  </tr>
</table>

### Router VM (2 network adapters)
<table border="1" cellpadding="8" cellspacing="0">
  <tr>
    <th>Adapter</th>
    <th>Attached To</th>
    <th>Interface</th>
    <th>IP Address</th>
  </tr>
  <tr>
    <td>Adapter 1</td>
    <td>Internal Network → "LAN"</td>
    <td>enp0s3</td>
    <td>192.168.1.1/29 (Static)</td>
  </tr>
  <tr>
    <td>Adapter 2</td>
    <td>NAT</td>
    <td>enp0s8</td>
    <td>10.0.2.15 (Auto from VirtualBox)</td>
  </tr>
</table>

## Tools & Technologies

## What this project demonstrates
<ul> 
  <li>Practical understanding of LAN/WAN networking</li>
  <li>DHCP configuration and automatic IP assignment</li>
  <li>NAT and packet forwarding using iptables</li>
  <li>Subnetting and IP address planning</li>
  <li>Linux networking tools (ip, ping, arp, tcpdump)</li>
  <li>Real-world router and gateway behavior</li>
</ul>
