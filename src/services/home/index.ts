import httpService from '../https.service';

// NEW
const getBlogs = () => {
  return httpService().get('blogs');
};

const liveSessions = () => {
  return httpService().get('events');
};

const getQuestions = () => {
  return httpService().get('questions');
};

const getUserServices = () => {
  return httpService().get('user/services');
};

const createUserServices = (body: object) => {
  return httpService().post('user/services', body);
};

const userServiceDoc = (body: object) => {
  return httpService('multipart/form-data').post(
    'user/service/documents',
    body,
  );
};

const getServices = () => {
  return httpService().get('services');
};

const getLeads = () => {
  return httpService().get('leads');
};

const createLeads = (body: object) => {
  return httpService().post('leads', body);
};

const getUserQuestions = () => {
  return httpService().get('user/questions');
};

const createUserQuestions = (body: object) => {
  return httpService().post('user/questions', body);
};

const editProfile = (body: object) => {
  return httpService().post('me/update', body);
};

const deleteuser = () => {
  return httpService().delete('delete');
};

export const HomeAPIS = {
  getBlogs,
  liveSessions,
  getQuestions,
  getServices,
  getUserServices,
  createUserServices,
  userServiceDoc,
  getLeads,
  createLeads,
  getUserQuestions,
  createUserQuestions,
  editProfile,
  deleteuser,
};
