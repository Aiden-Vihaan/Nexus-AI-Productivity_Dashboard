# Database Query Strategy

NEXUS avoids unnecessary N+1 query patterns.

Relationship-heavy queries should retrieve the required planning context using controlled database queries.

The application layer should request only the fields required by the use case rather than loading complete records indiscriminately.
