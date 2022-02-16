// import { UserController } from './user.controller';
// import { UserService } from './user.service';

// describe('UserController', () => {
//   let userController: UserController;
//   let userService: UserService;

//   beforeEach(() => {
//     userService = new UserService();
//     userController = new UserController(userService);
//   });

//   describe('test_1', () => {
//     it('데이터를 추가한것이 없으므로, 빈 배열을 리턴해주는 것이 맞습니다.', async () => {
//       const result = [];
//       jest.spyOn(userService, 'findAll').mockImplementation(() => result);

//       expect(await userController.findAllUser()).toBe(result);
//     });
//   });
// });