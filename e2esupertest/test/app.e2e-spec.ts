import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { userData } from './mockData/user';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  // it('/ (GET)', async () => {
  //   const response: any = await request(app.getHttpServer()).get('/');
  //   expect(response.statusCode).toEqual(200);
  //   expect(response).toBeDefined();
  //   expect(response.body).toBeDefined();
  // });

  // it('/ (GET)', async () => {
  //   const response: any = await request(app.getHttpServer()).get('/');
  //   expect(response.statusCode).toEqual(404);
  // });

  it('create user', async () => {
    const response: any = await request(app.getHttpServer())
      .post('/user')
      .send(userData);

    expect(response.statusCode).toBe(201);
  });
});
