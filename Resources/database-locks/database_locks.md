# Database Locks:

1. Shared Locks (S):
   1. Properties: Multiple transactions can acquire shared locks on the same resource simultaneously.
   2. When It Happens: When a transaction is reading a resource and wants to prevent other transactions from modifying it at the same time.

2. Exclusive Locks (X):
    1. Properties: Only one transaction can hold an exclusive lock on a resource at a time. It prevents any other transactions, whether they want to read or write, from accessing the resource.
    2. When It Happens: When a transaction is modifying a resource and wants to prevent any other transactions from accessing it concurrently.

3. Read Locks:
    1. Properties: Similar to shared locks, read locks are used to control access to a resource for reading purposes.
    2. When It Happens: When a transaction wants to read a resource and prevent other transactions from writing to it at the same time.

4. Write Locks:
    1. Properties: Similar to exclusive locks, write locks are used when a transaction needs to modify a resource and wants to prevent any other transactions, whether read or write, from accessing it concurrently.
    2. When It Happens: When a transaction is writing to a resource and wants exclusive access to it.

5. Intent Locks:
    1. Properties: Indicates that a transaction intends to acquire a certain type of lock at a higher level.
    2. When It Happens: Before a transaction acquires a lock, it may acquire an intent lock to signal its intention to acquire a higher-level lock.

6. Shared with Intent Exclusive (SIX) Locks:
    1. Properties: A combination of shared and intent exclusive lock. It is a shared lock with the intention of acquiring an exclusive lock.
    2. When It Happens: When a transaction wants to read a resource with the intention of later acquiring an exclusive lock to modify it.

7. Update Locks:
    1. Properties: A type of lock that is used to indicate an intention to update a resource.
    2. When It Happens: Typically used to prevent a common problem known as the "lost update" problem in concurrent transactions.


# Anomalies:
<!-- 1. Dirty Read
2. Non Repeatable Read: All rows that are read are locked
3. Phantoms -->

## Links:
<!-- [Table - Not detailed](https://www.youtube.com/watch?v=mRHiteSKcnE&ab_channel=dmg)
[Read Uncommitted x Read Committed - Explained](https://www.youtube.com/watch?v=mRHiteSKcnE&ab_channel=dmg)
[Repeatable Read - Explained](https://www.youtube.com/watch?v=7nv-7XQI7p0&ab_channel=CodeCowboyOrg)
[Serializable - Explained](https://www.youtube.com/watch?v=ZtPj09tJjnQ&ab_channel=CodeCowboyOrg) -->
[Explanation Simple](https://www.youtube.com/watch?v=nuBi2XbHH18&ab_channel=HusseinNasser)

## [Gepeto Link](https://chat.openai.com/c/6ab40de8-9e19-4913-9f1b-d3b427dd49ae)
