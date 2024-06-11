> Semantic-Release Cədvəli

| COMMIT MESSAGE | RELEASE TYPE |
| ------ | ------ |
| fix(`Fiksin predmeti`): `description` | Patch / Fix Release |
| feat(`Feature predmeti`): `description` | Minor / Feature Release |
| perf(`Performance update predmeti`): `description` | Major / Breaking Release |
BREAKING CHANGE: Bu açar sözü şərtidir, `perf update`-in footerində eyni bu 
formatda (`BREAKING CHANGE`: `description`) yazıla bilər.


> Version Rollback

Müəyyən vM.m.p versiyasının `master`-də geri rollback olunması üçün:

- Soldakı paneldən CI/CD bölməsinə daxil oluruq.
- "Run pipeline" düyməsini sıxırıq.
- "Run for branch name or tag" bölməsindən lazım olan versiya tag-ını seçirik.
- "Variables" bölməsində, key olaraq `ROLLBACK`, value olaraq isə `true` daxil edirik.
- "Run pipeline" düyməsini sıxırıq.

**Qeyd: Nəzərə alın ki, qeyd olunan açar sözləri istifadə olunmadığı halda CI/CD pipeline-ları işə düşməyəcəkdir.**
