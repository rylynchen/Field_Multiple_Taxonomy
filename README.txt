INSTALL
==========
1. Extract module into your modules folder.
2. Enable "field_multiple_taxonomy" on /admin/modules page.

USAGE
==========
1.Add field with "Multiple taxonomy reference" type to your target entity bundle, and config it in your condition.

NOTE
==========
If you get warning after submit form, which entity has field_multiple_taxonomy field, like :
"Using array_diff_assoc() for multilevel arrays in DrupalDefaultEntityController->cacheGet()"

Please make patch:
	patch file : "patch/1525176-fix_entity_conditions-D7.patch"
  target file "/include/entity.inc"

Reason:
https://drupal.org/node/1525176