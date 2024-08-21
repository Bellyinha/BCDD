import { PrismaClient } from '@prisma/client';
import { Faker, pt_BR} from '@faker-js/faker';

const prisma = new PrismaClient();

const seed = async () => {
	// deletar todos os registros antes de começar...
    await prisma.faker.deleteMany();

	// urilizar nomes brasileiros
	const faker = new Faker({ locale: [pt_BR] })

	// tornar resultado previsível
	faker.seed(1);

	//criação do objeto "data" que será passado para o prisma cadastrar
	const data = Array.from({ length: 100 }, () => { // length indica quantos usuários serão gerados
		const fullName = faker.person.fullName();
		const birthDate = faker.date.birthdate({ min: 14, max: 18, mode: "age" });
		const email = faker.internet.email({ firstName: fullName});
		const password = faker.internet.password();
		const state = faker.location.state();
		const bio = faker.helpers.maybe(() => faker.lorem.text(), 0.2);
		const phone = faker.phone.number();
		const avatar = faker.helpers.maybe(() => faker.image.urlPicsumPhotos(), 0.5);
		const status = faker.helpers.arrayElement(['Online', 'Offline']);
		const userName = faker.internet.userName({ firstName: fullName });
		const createAt = faker.date.past({ years:1 });

		return { fullName, birthDate, email, password, state, bio, phone, avatar, status, userName, createAt }
	});

	await prisma.faker.createMany({ data, skipDuplicates: true })
};

seed()
	.catch((e) => {
		throw e;
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
