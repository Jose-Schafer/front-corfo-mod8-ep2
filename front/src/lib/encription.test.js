// front/src/lib/encription.test.js
import { encrypt, decrypt } from "./encription";

// Mock para la variable de entorno
process.env.VITE_SECRET_KEY = "test_secret_key";

describe("Encryption functions", () => {
  test("encrypt and decrypt should work with objects", () => {
    // Arrange
    const testData = { name: "John", age: 30 };

    // Act
    const encrypted = encrypt(testData);
    const decrypted = decrypt(encrypted);

    // Assert
    expect(decrypted).toEqual(testData);
  });

  test("encrypt should return a string", () => {
    // Arrange
    const testData = { message: "Hello world" };

    // Act
    const encrypted = encrypt(testData);

    // Assert
    expect(typeof encrypted).toBe("string");
  });

  test("decrypt should return null for invalid encrypted data", () => {
    // Arrange
    const invalidData = "not-valid-encrypted-data";

    // Act
    const decrypted = decrypt(invalidData);

    // Assert
    expect(decrypted).toBeNull();
  });
});
