CREATE TABLE binanceUsers (
    username VARCHAR(255) PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    depositAddress VARCHAR(255) NOT NULL,
    privateKey VARCHAR(255) NOT NULL,
    balance VARCHAR(255) NOT NULL
)
