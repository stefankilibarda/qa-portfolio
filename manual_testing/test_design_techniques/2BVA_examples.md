# 2-Value Boundary Value Analysis (2BVA) – Examples

This document demonstrates 2BVA tables for three tasks. Each table lists **equivalence partitions (EP)** with the **min−1 / min / max / max+1** values.

---

## 1) Speed control – action by speed range

Rules (integer km/h):
- ≤ 90 → nothing happens  
- 91–110 → warned  
- 111–130 → fined  
- > 130 → license suspended

### 2BVA Table
| EP | min-1 | min | max | max+1 |
| :-- | :---: | :--: | :--: | :---: |
| EP1 (≤ 90)      | –   | 0 km/h  | 90 km/h  | 91 km/h |
| EP2 (91–110)    | 90 km/h | 91 km/h | 110 km/h | 111 km/h |
| EP3 (111–130)   | 110 km/h | 111 km/h | 130 km/h | 131 km/h |
| EP4 (> 130)     | 130 km/h | 131 km/h | – | – |

---

## 1.2) Smart home temperature feedback

Rules (nearest °C):
- t ≤ 10 → Icy Cool!  
- 11–15 → Chilled Out!  
- 16–19 → Cool Man!  
- 20–22 → Too Warm!  
- t > 22 → Hot & Sweaty!

### 2BVA Table
| EP | min-1 | min | max | max+1 | TC values (examples) |
| :-- | :---: | :--: | :--: | :---: | :-- |
| EP1 (≤ 10°C)   | –    | – | 10°C | 11°C | 10°C, 11°C |
| EP2 (11–15°C)  | 10°C | 11°C | 15°C | 16°C | 10°C, 11°C, 15°C, 16°C |
| EP3 (16–19°C)  | 15°C | 16°C | 19°C | 20°C | 15°C, 16°C, 19°C, 20°C |
| EP4 (20–22°C)  | 19°C | 20°C | 22°C | 23°C | 19°C, 20°C, 22°C, 23°C |
| EP5 (> 22°C)   | 22°C | 23°C | – | – | 22°C, 23°C |

---

## 1.3) Speed control – different boundaries

Rules (integer km/h):
- ≤ 50 → nothing happens  
- 51–55 → warned  
- 56–60 → fined  
- > 60 → license suspended

### 2BVA Table
| EP | min-1 | min | max | max+1 | TC values (examples) |
| :-- | :---: | :--: | :--: | :---: | :-- |
| EP1 (≤ 50)     | – | – | 50 km/h | 51 km/h | 50, 51 |
| EP2 (51–55)    | 50 km/h | 51 km/h | 55 km/h | 56 km/h | 50, 51, 55, 56 |
| EP3 (56–60)    | 55 km/h | 56 km/h | 60 km/h | 61 km/h | 55, 56, 60, 61 |
| EP4 (> 60)     | 60 km/h | 61 km/h | – | – | 60, 61 |
