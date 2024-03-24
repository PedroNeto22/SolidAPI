import { describe, expect, it } from 'vitest';
import { getUserByIdRepositoryMock } from '../../../../test/utils/GetUserByIdRepositoryMock';
import GetUserByIdUseCase from './GetUserByIdUseCase';
import User from '../../../entities/User';

const arr: User[] = [];
arr.push(new User('aaaaa', 'aaaaa', 'aaaaa', 'aaaaa'));
const mockGetRepository = getUserByIdRepositoryMock(arr);
const sut = new GetUserByIdUseCase(mockGetRepository);

describe('Get user by UUID', () => {
  it('should not be possible get user by id if user does not exists', () => {
    expect(
      sut.execute('1d0ced51-d007-49ee-8832-4d15ad423452'),
    ).rejects.toThrowError();
  });

  it('should be possible get user by id', () => {
    const firstUserId = mockGetRepository.inMemoryDataBase[0];
    expect(sut.execute(firstUserId.id as string)).resolves.toBeInstanceOf(User);
  });
});
