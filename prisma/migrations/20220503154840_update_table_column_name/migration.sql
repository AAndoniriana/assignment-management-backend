-- CreateTable
CREATE TABLE "Rights" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(20),
    "label" VARCHAR(50),

    CONSTRAINT "Rights_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserRole" (
    "id" SERIAL NOT NULL,
    "label" VARCHAR(80),

    CONSTRAINT "UserRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userroleprivileges" (
    "id" SERIAL NOT NULL,
    "userroleid" INTEGER,
    "rightid" INTEGER,

    CONSTRAINT "userroleprivileges_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(40),
    "firstname" VARCHAR(80),
    "dateofbirth" DATE,
    "login" VARCHAR(15),
    "password" VARCHAR(100),
    "userroleid" INTEGER,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "userroleprivileges" ADD CONSTRAINT "rights_fk" FOREIGN KEY ("rightid") REFERENCES "Rights"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "userroleprivileges" ADD CONSTRAINT "user_role_fk" FOREIGN KEY ("userroleid") REFERENCES "UserRole"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "user_user_role_fk" FOREIGN KEY ("userroleid") REFERENCES "UserRole"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
