### High Level Design -

1. Design URL Shortener (hashing, redirection, analytics)
2. Design Twitter / Instagram Feed (news feed, fan-out)
3. Design YouTube / Netflix (video upload, streaming, CDN)
4. Design WhatsApp / Messaging System (real time, delivery receipts)
5. Design Uber / Ride Sharing (geo-indexing, matching, surge pricing) 
6. Design Google Maps (routing, geo search, map tiles)
7. Design Notification System (multi-channel: push, email at scale)
8. Design Rate Limiter (Token Bucket, Sliding Window - distributed)
9. Design Key-Value Store (like DynamoDB / Redis)
10. Design Distributed Cache (eviction, consistency, partitioning)
11. Design Search Autocomplete (Trie at scale, typeahead service)
12. Design Payment System / UPI-like Gateway (idempotency, Saga)
13. Design Distributed task scheduler (priority queues, retries, delayed jobs)
14. Design Leaderboard / Distributed Counters (real-time ranking at scale)
15. Design Logging & Monitoring System (log aggregation, alerting)

**Foundation and Mental Model**

→ HLD interview framework; API design and data modeling

→ CAP theorem; strong, eventual and linearizable consistency + SQL vs NoSQL; QPS, storage and bandwidth estimation

**Core Infrastructure Building Blocks**

→ Networking; L4/L7 load balancers; consistent hashing

→ CDN, DNS and reverse proxies

→ Caching: write-through, write-back, cache-aside and TTL → Redis: data structures, eviction and pub/sub • Live demo

**Database & Messaging Systems**

→ Sharding: range, hash and directory-based

→ Replication: leader-follower, multi-leader and leaderless

→ Indexing: B-Tree and LSM tree

→ Kafka, SQS, event-driven architecture and async fan-out

### Low Level Design -

→ OOP: abstraction, encapsulation, inheritance, and polymorphism

→ Object Modelling: entities, value objects, interfaces, associations, aggregation and composition

→ SOLID Principles, dependency injection and clean code

→ LLD Framework: requirements → entities → class design → code → trade offs 

**Design Patterns -**  

1. Creation Patterns - Singleton, Builder, Abstract Factory, Factory, and Prototype
2. Structural Patterns - Adapter, Decorator, Facade, Proxy, and Composition
3. Behavioural Patterns - Observer, Strategy, Chain of Responsibility, State, Command and Template Method
4. Pattern Selection, extensibility, hands-on refactoring