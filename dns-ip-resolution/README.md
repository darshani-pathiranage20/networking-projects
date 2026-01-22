# DNS + IP Resolution Demo

## Objective
Understand how domain names are converted into IP addresses and how packets travel across the network.

## Tools Used
- nslookup
- ping
- tracert

## DNS Resolution
- Domain: google.com
- DNS resolved IP: 142.250.192.14
- DNS server responded successfully

<img width="626" height="222" alt="nslookup-github" src="https://github.com/user-attachments/assets/e3dfa63e-bd58-4397-8030-0d40ed677e3f" />

## DNS Failure Test
- Invalid domain resulted in NXDOMAIN
- Shows DNS dependency for internet access

<img width="1033" height="167" alt="dns-failure" src="https://github.com/user-attachments/assets/d2fba22a-5a31-4e94-ae94-f243f567778a" />

## Test Connectivity
- Sends ICMP packets to test reachability
- It resolves domain to IP
- Shows response time (ms)

<img width="970" height="597" alt="Test Connectivity Using - ping" src="https://github.com/user-attachments/assets/78accc6d-8490-43d3-a802-8980cd156327" />

## Network Path
- Traced packets through multiple routers
- Demonstrates WAN routing and ISP hops

<img width="1047" height="928" alt="trace route" src="https://github.com/user-attachments/assets/24b447d8-b821-4d44-8ed2-456c4aca1e6c" />


## Key Learnings
- DNS maps human-readable names to IPs
- Computers communicate using IP addresses
- Internet traffic passes through multiple routers

