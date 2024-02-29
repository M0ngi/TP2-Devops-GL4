import {
	BadRequestException,
	createParamDecorator,
	ExecutionContext,
} from '@nestjs/common';
import { ClassConstructor, plainToClass } from 'class-transformer';
import { validateSync } from 'class-validator';
import { Request } from 'express';

export const SearchParams = createParamDecorator(
	(data: ClassConstructor<object>, context: ExecutionContext) => {
		const request: Request = context.switchToHttp().getRequest();
		const instance = plainToClass(data, request.query, {
			enableImplicitConversion: true,
		});

		const errors = validateSync(instance, {
			skipNullProperties: false,
			skipMissingProperties: false,
			forbidUnknownValues: true,
		});

		if (errors.length > 0) {
			throw new BadRequestException(
				errors.map((error) => error.toString()).join('\n'),
			);
		}

		return instance;
	},
);