const App = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Hero */}
            <section className="flex flex-col items-center justify-center px-6 py-32">
                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
                    Hi, I'm Seong
                </h1>
                <p className="mt-4 max-w-xl text-center text-lg text-muted-foreground">
                    Software engineer building things for the web.
                </p>
            </section>

            {/* About */}
            <section className="mx-auto max-w-3xl px-6 py-16">
                <h2 className="text-3xl font-semibold">About</h2>
                <p className="mt-4 text-muted-foreground">
                    Experienced Software Engineer based out of Baltimore,
                    Maryland. Currently building at Capital One. Graduate of the
                    University of Maryland, Baltimore County (Class of 2015).
                    AWS Certified Solutions Architect — Associate.
                </p>
            </section>

            {/* Experience */}
            <section className="mx-auto max-w-3xl px-6 py-16">
                <h2 className="text-3xl font-semibold">Experience</h2>
                <div className="mt-8 space-y-6">
                    <div className="rounded-lg border bg-card p-6">
                        <h3 className="text-xl font-medium">Capital One</h3>
                        <p className="text-sm text-muted-foreground">
                            Senior Software Engineer &middot; Mar 2023 – Present
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                            McLean, VA &middot; Remote
                        </p>
                    </div>

                    <div className="rounded-lg border bg-card p-6">
                        <h3 className="text-xl font-medium">Olive</h3>
                        <p className="text-sm text-muted-foreground">
                            Senior Software Engineer &middot; Sep 2021 – Feb
                            2023
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Remote
                        </p>
                        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                            <li>
                                Implemented authN/authZ solutions adopted by 3
                                internal teams to secure healthcare data
                                following OAuth 2.0 specs using TypeScript,
                                Python, and DynamoDB.
                            </li>
                            <li>
                                Architected subscription APIs in Node integrated
                                with Stripe for payments, driving monetization
                                on the Olive Helps platform.
                            </li>
                            <li>
                                Full stack development with React, Node, AWS
                                ECS, and GitLab CI/CD.
                            </li>
                        </ul>
                    </div>

                    <div className="rounded-lg border bg-card p-6">
                        <h3 className="text-xl font-medium">ByteLion</h3>
                        <p className="text-sm text-muted-foreground">
                            Senior Software Engineer &middot; Jun 2021 – Sep
                            2021
                        </p>
                        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                            <li>
                                Led a team of 3 on a Kroger contract for
                                managing warehouse data.
                            </li>
                            <li>
                                Architected a Java (Spring) application deployed
                                to Azure for ETL processes identifying item
                                locations within warehouses and grocery stores.
                            </li>
                            <li>ByteLion was acquired by Olive in 2021.</li>
                        </ul>
                    </div>

                    <div className="rounded-lg border bg-card p-6">
                        <h3 className="text-xl font-medium">Fearless</h3>
                        <p className="text-sm text-muted-foreground">
                            Software Engineer &middot; Aug 2020 – Jun 2021
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Baltimore, MD
                        </p>
                        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                            <li>
                                Senior engineer for BESPIN's Digital University
                                supporting 20,000+ users.
                            </li>
                            <li>
                                Built a learning management platform for Airmen
                                using Next.js, Express, and Firebase on GCP.
                            </li>
                            <li>
                                Mentored airmen through collaborative working
                                sessions.
                            </li>
                        </ul>
                    </div>

                    <div className="rounded-lg border bg-card p-6">
                        <h3 className="text-xl font-medium">14 West</h3>
                        <p className="text-sm text-muted-foreground">
                            Software Engineer &middot; Jun 2018 – Aug 2020
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Baltimore, MD
                        </p>
                    </div>

                    <div className="rounded-lg border bg-card p-6">
                        <h3 className="text-xl font-medium">Allegis Group</h3>
                        <p className="text-sm text-muted-foreground">
                            Java Engineer &middot; Sep 2016 – Jun 2018
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Hanover, MD
                        </p>
                        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                            <li>
                                Built search and match functionalities for the
                                Applicant Tracking System using Elasticsearch.
                            </li>
                            <li>
                                Enhanced recruiter search experiences in a large
                                development team.
                            </li>
                            <li>
                                Test-driven development with JUnit in an Agile
                                Scrum environment.
                            </li>
                        </ul>
                        <p className="mt-3 text-sm text-muted-foreground">
                            Product Team Intern &middot; Jun 2016 – Aug 2016
                        </p>
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="mx-auto max-w-3xl px-6 py-16">
                <h2 className="text-3xl font-semibold">Certifications</h2>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <div className="rounded-lg border bg-card p-6">
                        <h3 className="text-xl font-medium">
                            AWS Solutions Architect
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Associate &middot; Amazon Web Services
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Issued Apr 2024 &middot; Expires Apr 2027
                        </p>
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="mx-auto max-w-3xl px-6 py-16">
                <h2 className="text-3xl font-semibold">Education</h2>
                <div className="mt-8">
                    <div className="rounded-lg border bg-card p-6">
                        <h3 className="text-xl font-medium">
                            University of Maryland, Baltimore County
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            2011 — 2015
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t px-6 py-8 text-center text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Seong Lee
            </footer>
        </div>
    );
};

export default App;
