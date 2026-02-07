# Home Lab Network — Virtual LAN Project
<p> Built a small home lab in VirtualBox using three Linux virtual machines to understand how real networks work. One VM was configured as a router, handling DHCP and internet access, while the other two acted as client machines on a private LAN. 

The router VM used two network adapters: one connected to NAT for internet access and another connected to an internal network to serve the LAN. A DHCP server was configured on the router so client VMs automatically received IP addresses without any manual setup. NAT was implemented using iptables to allow private IPs to access the internet.

The network was designed using a /29 subnet (192.168.1.0/29), sized efficiently for the required devices. Connectivity and behavior were verified using ping tests, ARP table inspection, and packet capture with tcpdump. All configurations were made persistent across reboots.
</p>

## 📸Network Topology
<img width="700" height="600" alt="image" src="https://github.com/user-attachments/assets/06c4c0b6-c2a1-4ee0-8241-4617f51d7b0d" />

 ## 🎯What This Project Covers
 <ul>
   <li>IP Addressing & Subnetting - /29 network sized for 3 devices </li>
   <li>DHCP - Automatic IP assignment via ISC DHCP server</li>
   <li>NAT - iptables masquerading for internet sharing</li>
   <li>Routing - Linux router forwards packets between LAN and WAN</li>
 </ul>

 ## 📋Network Specifications
 IP Addressing & Subnetting — Designed a /29 network (6 usable hosts) matched to the lab size

### 2 ^ 3 -->  8 -2 = 6 
 
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
    <td>Internal Network →  "LAN"</td>
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

## 🛠️Tools & Technologies
**💻 Virtualization:**
- VirtualBox — VM hosting and virtual networking

**🐧 Operating System:**
- Ubuntu Server 22.04 LTS — All three VMs

**🌐 Networking Tools:**
- ISC DHCP Server (`isc-dhcp-server`) — Automatic IP assignment
- iptables — NAT configuration and firewall rules
- iptables-persistent — Save firewall rules across reboots
- systemd — Service management for persistent configuration
- Netplan — Network configuration on client VMs

**🧪 Testing & Verification:**
- ping — Connectivity testing
- tcpdump — Packet capture and analysis
- ip / route / arp — Interface and routing management
- nslookup — DNS verification

## What this project demonstrates
<ul> 
  <li>Practical understanding of LAN/WAN networking</li>
  <li>DHCP configuration and automatic IP assignment</li>
  <li>NAT and packet forwarding using iptables</li>
  <li>Subnetting and IP address planning</li>
  <li>Linux networking tools (ip, ping, arp, tcpdump)</li>
  <li>Real-world router and gateway behavior</li>
</ul>

# 📸 Screenshots
### VirtualBox Setup
<img width="500" height="600" alt="vbox-setup" src="https://github.com/user-attachments/assets/abcaafb8-01a4-4c76-97a6-b8bb92b6e2e1" />

### Router VM
<h4>Assigns IP addresses to interfaces - netplan</h4>
<img width="962" height="235" alt="3-configer vm network interface" src="https://github.com/user-attachments/assets/ca5bb482-bafc-401e-b7f3-0bb88f634a4f" />
<h4>Enable IP forwarding</h4>
<img width="692" height="57" alt="image" src="https://github.com/user-attachments/assets/2b0c7dcc-af05-47df-83c1-d3784a264476" />
<h4>Configure DHCP Server</h4>
<img width="947" height="457" alt="image" src="https://github.com/user-attachments/assets/8ed54f67-9193-4882-84ab-d8ebdacf722b" />
<h4>Configure Which Interface DHCP Uses </h4>
<img width="762" height="125" alt="image" src="https://github.com/user-attachments/assets/462f36a9-38aa-4e62-ba5e-e5b90a0374f4" />
<h4>Verify DHCP Configuration check status</h4>
<img width="962" height="523" alt="image" src="https://github.com/user-attachments/assets/11382901-1310-4575-a3dc-439f9e19a97c" />
<h4>DHCP Leases - On ROUTER-VM, shows what IPs have been assigned </h4>
<h4>sudo cat /var/lib/dhcp/dhcpd.leases</h4>
<img width="876" height="817" alt="image" src="https://github.com/user-attachments/assets/4cd9edaa-6756-4a82-b293-e561f518039b" />
<h4>Filter table - Allow packets to flow between interfaces</h4>
<p>Allow LAN → Internet (FORWARD)</p>
<table>
<tr><td>Direction: From enp0s8 (LAN) to enp0s3 (Internet)</td></tr>
<tr><td>Purpose: Let packets from clients reach the internet</td></tr>
<tr><td>Action: ACCEPT</td></tr>
</table>
<p>Allow Internet → LAN (FORWARD)</p>
<table>
<tr><td>Direction: From enp0s3 (Internet) to enp0s8 (LAN)</td></tr>
<tr><td>Purpose: Let return traffic from internet reach clients</td></tr>
<tr><td>Action: ACCEPT</td></tr>
</table>
<img width="956" height="228" alt="image" src="https://github.com/user-attachments/assets/ebf56a00-af52-4cbf-a1eb-2c4439f4ba42" />
<h4>Nat table - MASQUERADE for NAT</h4>
<table>
<tr><td>Direction: On enp0s3 (Internet interface)</td></tr>
<tr><td>Purpose: Rewrite source IP from 192.168.1.x to 10.0.2.15</td></tr>
<tr><td>Action: MASQUERADE</td></tr>
</table>
<img width="873" height="248" alt="image" src="https://github.com/user-attachments/assets/012fd1b2-8c5d-452b-8072-cb3cd8654e85" />
<h4>Save rules in a file and verify saved</h4>
<img width="886" height="442" alt="image" src="https://github.com/user-attachments/assets/baa5442a-a2b4-4f99-96c5-d07994520f65" />
<h4>Making iptables rules persistent after reboot</h4>
<img width="866" height="263" alt="image" src="https://github.com/user-attachments/assets/71f83e7e-2a63-4e34-a2cd-9bf499eba8ab" />

### Client VMs setup
#### Configure Clients to Use DHCP
<img width="957" height="182" alt="image" src="https://github.com/user-attachments/assets/ba35653d-5b77-4d76-92a4-b5393f882942" />
<h4>Verify DHCP IP Was Assigned</h4>
<h5>VM 1 ip --> 192.168.1.3  and  VM 2 ip --> 192.168.1.4</h5>
<img width="1917" height="247" alt="image" src="https://github.com/user-attachments/assets/7015740f-d35a-4467-9aae-918f3829c513" />

### Packet Capture
<h4>Test Local Network</h4>
<img width="1841" height="352" alt="image" src="https://github.com/user-attachments/assets/120ccf6e-7cd4-4b8d-8894-d9966c54bba5" />

<h4>Test Internet Access</h4>
<img width="1862" height="317" alt="image" src="https://github.com/user-attachments/assets/2d03c955-02fb-4313-ba79-b104c4166302" />

<h4>Test DNS Resolution</h4>
<img width="1747" height="187" alt="image" src="https://github.com/user-attachments/assets/99d902b5-a26c-49f6-8f76-fc7f043458db" />

<h4>Test Web Access</h4>
<img width="1292" height="276" alt="image" src="https://github.com/user-attachments/assets/1ca82d2c-6a37-43bc-9366-9fecb5ed9e94" />
<img width="1290" height="277" alt="image" src="https://github.com/user-attachments/assets/f96a0cc3-6f16-407a-9194-6d6c8f1d0084" />



