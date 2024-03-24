import { describe, expect, it } from 'vitest';
import { createUserRepositoryMock } from '../../../../test/utils/CreateUserRepositoryMock';
import CreateUserUseCase from './CreateUserUseCase';

const mockRepository = createUserRepositoryMock();
const sut = new CreateUserUseCase(mockRepository);

describe('Create an user', () => {
  it('should be create an user', async () => {
    await sut.execute({
      firstName: 'Pedro',
      lastName: 'Neto',
      email: 'teste@teste.com',
      password: '123456',
    });

    expect(mockRepository.inMemoryDataBase).toHaveLength(1);
  });

  it('Should not be possible to create an user if the email exists', () => {
    expect(
      sut.execute({
        firstName: 'Pedro',
        lastName: 'Neto',
        email: 'teste@teste.com',
        password: '123456',
      }),
    ).rejects.toThrowError();
  });
});
