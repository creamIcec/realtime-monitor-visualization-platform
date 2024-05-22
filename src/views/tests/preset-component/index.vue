<script setup>
import { Button } from "@/components/Button/index";
import { BasicArrow } from "@/components/Basic/index";
import { BasicTitle } from "@/components/Basic/index";
import { BasicHelp } from "@/components/Basic/index";
import { BasicTable } from "@/components/Table";
import { IconEnum } from "@/enums/appEnum";
import { useModal } from "@/components/Modal";
import TenantModal from "@/views/system/tenant/TenantModal.vue";
import { t } from "@/hooks/web/useI18n";

const [registerModal, { openModal }] = useModal();

function handleCreate() {
  openModal(true, { isUpdate: false });
}

</script>
<style scoped></style>
<template>
  <div>
    <Button>内置组件引用-Button</Button>
    <BasicArrow></BasicArrow>
    <BasicTitle>内置组件引用-BasicTitle</BasicTitle>
    <BasicHelp></BasicHelp>
    <BasicTable>
      <template #toolbar>
        <a-button type="primary" v-auth="['system:tenant:create']" :preIcon="IconEnum.ADD" @click="handleCreate">
          {{ t('action.create') }}
        </a-button>
        <a-button type="warning" v-auth="['system:tenant:export']" :preIcon="IconEnum.EXPORT" @click="handleExport">
          {{ t('action.export') /*FIXME: 为什么无法获取翻译?*/ }}
        </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction :action="[
            { icon: IconEnum.EDIT, label: t('action.edit'), auth: 'system:tenant:update', onClick: handleEdit.bind(null, record) },
            {
              icon: IconEnum.DELETE,
              color: 'error',
              label: t('action.delete'),
              auth: 'system:tenant:delete',
              popConfirm: {
                title: t('common.delMessage'),
                placement: 'left',
                confirm: handleDelete.bind(null, record)
              }
            }
          ]" />
        </template>
      </template>
      <TenantModal @register="registerModal" @success="reload()" />
    </BasicTable>
  </div>
</template>