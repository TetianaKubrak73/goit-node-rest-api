import * as contactsService from "../services/contactsServices.js";
import HttpError from "../helpers/HttpError.js";
import { controllerDecorator } from "../helpers/controllerDecorator.js";

export const getAllContacts = controllerDecorator(async (req, res, next) => {
  const result = await contactsService.listContacts();

  res.status(200).json(result);
});

export const getOneContact = controllerDecorator(async (req, res, next) => {
  const { id } = req.params;
  const result = await contactsService.getContactById(id);

  if (!result) {
    throw HttpError(404, `Not found`);
  }
  res.status(200).json(result);
});

export const deleteContact = controllerDecorator(async (req, res, next) => {
  const { id } = req.params;
  const result = await contactsService.removeContact(id);
  if (!result) {
    throw HttpError(404, `Not found`);
  }
  res.status(200).json(result);
});

export const createContact = controllerDecorator(async (req, res, next) => {
  const result = await contactsService.addContact(req.body);

  res.status(201).json(result);
});

export const updateContact = controllerDecorator(async (req, res, next) => {
  const { id } = req.params;
  const result = await contactsService.updateContact(id, req.body);
  if (!result) {
    throw HttpError(404, `Not found`);
  }

  res.status(200).json(result);
});

export const updateStatusContact = controllerDecorator(
  async (req, res, next) => {
    const { id } = req.params;
    const favoriteContact = await contactsService.updateStatus(id, req.body);
    if (!favoriteContact) {
      throw HttpError(404, `Not found`);
    }
    res.status(200).json(favoriteContact);
  }
);
