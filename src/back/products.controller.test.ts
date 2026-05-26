import { describe, expect, it, beforeEach, vi } from 'vitest';
import { ProductsController } from './products.controller';
import type { Request, Response, NextFunction } from 'express';

const mockRepo = {
    read: vi.fn(),
    readById: vi.fn(),
    create: vi.fn(),
    update: vi.fn(),
    delete: vi.fn(),
};
