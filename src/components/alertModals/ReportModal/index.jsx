import AlertModalLayout from '../AlertModalLayout';

const ReportModal = () => {
  return (
    <AlertModalLayout comment='게시글을 신고하시겠어요?'>
      <li>취소</li>
      <li>신고</li>
    </AlertModalLayout>
  );
};

export default ReportModal;
