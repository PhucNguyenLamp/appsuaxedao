import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClientService } from 'inet-core';

@Injectable({
    providedIn: 'root'
})
export class CEDUDataService {
    public url = {
        // STUDENT
        // Student & Contacts
        cedu_contact_create: iNet.getPUrl('cedu/contact/create'),
        cedu_contact_update: iNet.getPUrl('cedu/contact/update'),
        cedu_contact_list: iNet.getPUrl('cedu/contact/list'),
        cedu_contact_duplicate_check: iNet.getPUrl('cedu/contact-duplicate/check'),
        cedu_contact_name_update: iNet.getPUrl('cedu/contact-name/update'),
        // Lead
        cedu_lead_create: iNet.getPUrl('cedu/lead/create'),
        cedu_lead_update: iNet.getPUrl('cedu/lead/update'),
        cedu_lead_list: iNet.getPUrl('cedu/lead/list'),
        cedu_lead_unqualify: iNet.getPUrl('cedu/lead/unqualify'),
        // Guardianship
        cedu_guardianship_create: iNet.getPUrl('cedu/guardianship/create'),
        cedu_guardianship_update: iNet.getPUrl('cedu/guardianship/update'),
        cedu_guardianship_list: iNet.getPUrl('cedu/guardianship/list'),

        // EMPLOYEE
        // Employee & Lecture
        cedu_employee_create: iNet.getPUrl('cedu/employee/create'),
        cedu_employee_update: iNet.getPUrl('cedu/employee/update'),
        cedu_employee_list: iNet.getPUrl('cedu/employee/list'),
        // Employee Permission Profile
        cedu_employee_permission_profile_create: iNet.getPUrl('cedu/employee-permission-profile/create'),
        cedu_employee_permission_profile_update: iNet.getPUrl('cedu/employee-permission-profile/update'),
        cedu_employee_permission_profile_list: iNet.getPUrl('cedu/employee-permission-profile/list'),
        // Teaching Unit Summary Doc
        cedu_teaching_unit_summary_doc_create: iNet.getPUrl('cedu/teaching-unit-summary-doc/create'),
        cedu_teaching_unit_summary_doc_update: iNet.getPUrl('cedu/teaching-unit-summary-doc/update'),
        cedu_teaching_unit_summary_doc_list: iNet.getPUrl('cedu/teaching-unit-summary-doc/list'),
        // Teaching Unit Summary Doc Line
        cedu_teaching_unit_summary_doc_line_generate: iNet.getPUrl('cedu/teaching-unit-summary-doc-line/generate'),
        cedu_teaching_unit_summary_doc_line_list: iNet.getPUrl('cedu/teaching-unit-summary-doc-line/list'),
        // Checking
        cedu_lecturer_attendance_check: iNet.getPUrl('cedu/lecturer-attendance/check'),
        // Study Subject Assignment
        cedu_study_subject_assignment_list: iNet.getPUrl('cedu/study-subject-assignment/list'),
        cedu_study_subject_assignment_create: iNet.getPUrl('cedu/study-subject-assignment/create'),

        // CLASS
        // Class
        cedu_student_portal_class_unit_list: iNet.getPUrl('cedu/student-portal/class-unit/list'),
        // cedu_class_material_set_list: iNet.getPUrl('cedu/class-material-set/list'),

        cedu_class_create: iNet.getPUrl('cedu/class/create'),
        cedu_class_update: iNet.getPUrl('cedu/class/update'),
        cedu_class_list: iNet.getPUrl('cedu/class/list'),
        cedu_class_cancel: iNet.getPUrl('cedu/class/cancel'),
        cedu_class_info_update: iNet.getPUrl('cedu/class-info/update'),
        cedu_class_end_date_update: iNet.getPUrl('cedu/class-end-date/update'),
        cedu_class_start_end_list: iNet.getPUrl('cedu/class-start-end/list'),
        cedu_class_progress_view: iNet.getPUrl('cedu/class-progress/view'),
        cedu_class_no_schedule_list: iNet.getPUrl('cedu/class-no-schedule/list'),
        cedu_class_recruiting_list: iNet.getPUrl('cedu/class-recruiting/list'),
        // Class Enrollment
        cedu_class_enrollment_create: iNet.getPUrl('cedu/class-enrollment/create'),
        cedu_class_enrollment_update: iNet.getPUrl('cedu/class-enrollment/update'),
        cedu_class_enrollment_list: iNet.getPUrl('cedu/class-enrollment/list'),
        cedu_class_enrollment_full_list: iNet.getPUrl('cedu/class-enrollment-full/list'),
        cedu_class_enrollment_transfer: iNet.getPUrl('cedu/class-enrollment/transfer'),
        cedu_class_enrollment_delete: iNet.getPUrl('cedu/class-enrollment/delete'),
        cedu_class_enrollment_resign_remark_update: iNet.getPUrl('cedu/class-enrollment-resign-remark/update'),
        // Class Assignment
        cedu_class_assignment_create: iNet.getPUrl('cedu/class-assignment/create'),
        cedu_class_assignment_update: iNet.getPUrl('cedu/class-assignment/update'),
        cedu_class_assignment_list: iNet.getPUrl('cedu/class-assignment/list'),
        // Class Study Subject
        cedu_class_study_subject_create: iNet.getPUrl('cedu/class-study-subject/create'),
        cedu_class_study_subject_update: iNet.getPUrl('cedu/class-study-subject/update'),
        cedu_class_study_subject_list: iNet.getPUrl('cedu/class-study-subject/list'),
        cedu_class_study_subject_delete: iNet.getPUrl('cedu/class-study-subject/delete'),
        // Class Unit
        cedu_class_unit_create: iNet.getPUrl('cedu/class-unit/create'),
        cedu_class_unit_update: iNet.getPUrl('cedu/class-unit/update'),
        cedu_class_unit_list: iNet.getPUrl('cedu/class-unit/list'),
        cedu_class_unit_delete: iNet.getPUrl('cedu/class-unit/delete'),
        cedu_class_unit_generate: iNet.getPUrl('cedu/class-unit/generate'),
        cedu_class_unit_remove_all: iNet.getPUrl('cedu/class-unit/remove-all'),
        cedu_class_unit_reset: iNet.getPUrl('cedu/class-unit/reset'),
        cedu_class_unit_split: iNet.getPUrl('cedu/class-unit/split'),
        cedu_class_unit_time_conflict_check: iNet.getPUrl('cedu/class-unit-time-conflict/check'),
        cedu_class_unit_attendance_record_list: iNet.getPUrl('cedu/class-unit-attendance-record/list'),
        cedu_class_unit_facility_mass_update: iNet.getPUrl('cedu/class-unit-facility/mass-update'),
        cedu_class_unit_facility_search: iNet.getPUrl('cedu/class-unit-facility/search'),
        cedu_class_unit_batch_release: iNet.getPUrl('cedu/class-unit/batch-release'),
        cedu_class_unit_batch_plan: iNet.getPUrl('cedu/class-unit/batch-plan'),
        cedu_class_unit_assignment_copy: iNet.getPUrl('cedu/class-unit-assignment/copy'),
        cedu_class_unit_check: iNet.getPUrl('cedu/class-unit/check'),
        cedu_class_unit_result_update: iNet.getPUrl('cedu/class-unit-result/update'),
        // Class Unit Lecturer Attendance
        cedu_class_unit_lecturer_attendance_create: iNet.getPUrl('cedu/class-unit-lecturer-attendance/create'),
        cedu_class_unit_lecturer_attendance_update: iNet.getPUrl('cedu/class-unit-lecturer-attendance/update'),
        cedu_class_unit_lecturer_attendance_list: iNet.getPUrl('cedu/class-unit-lecturer-attendance/list'),
        cedu_class_unit_lecturer_attendance_delete: iNet.getPUrl('cedu/class-unit-lecturer-attendance/delete'),
        // Schedule
        cedu_class_day_schedule_list: iNet.getPUrl('cedu/class-day-schedule/list'),
        cedu_class_schedule_batch_adjust: iNet.getPUrl('cedu/class-schedule/batch-adjust'),
        // Class Attendance
        cedu_class_attendance_doc_list: iNet.getPUrl('cedu/class-attendance-doc/list'),
        cedu_class_attendance_record_list: iNet.getPUrl('cedu/class-attendance-record/list'),
        cedu_class_attendance_record_check: iNet.getPUrl('cedu/class-attendance-record/check'),
        cedu_class_unit_attendance_update: iNet.getPUrl('cedu/class-unit-attendance/update'),
        cedu_class_attendance_doc_create: iNet.getPUrl('cedu/class-attendance-doc/create'),
        cedu_class_attendance_doc_update: iNet.getPUrl('cedu/class-attendance-doc/update'),
        cedu_class_attendance_doc_delete: iNet.getPUrl('cedu/class-attendance-doc/delete'),
        cedu_class_date_attendance_record_list: iNet.getPUrl('cedu/class-date-attendance-record/list'),
        // Class Material Set
        cedu_class_material_set_list: iNet.getPUrl('cedu/class-material-set/list'),  
        cedu_class_material_set_create: iNet.getPUrl('cedu/class-material-set/create'),  
        cedu_class_material_set_update: iNet.getPUrl('cedu/class-material-set/update'),  
        cedu_class_material_set_delete: iNet.getPUrl('cedu/class-material-set/delete'), 
        // Student Role Assignment
        cedu_student_role_assignment_list: iNet.getPUrl('cedu/student-role-assignment/list'),
        cedu_student_role_assignment_create: iNet.getPUrl('cedu/student-role-assignment/create'),
        cedu_student_role_assignment_update: iNet.getPUrl('cedu/student-role-assignment/update'),
 
        // EXAM
        // Examination
        cedu_examination_create: iNet.getPUrl('cedu/examination/create'),
        cedu_examination_update: iNet.getPUrl('cedu/examination/update'),
        cedu_examination_list: iNet.getPUrl('cedu/examination/list'),
        cedu_examination_result_list: iNet.getPUrl('cedu/examination-result/list'),
        cedu_examination_result_total_calculate: iNet.getPUrl('cedu/examination-result-total/calculate'),

        // Exam
        cedu_exam_create: iNet.getPUrl('cedu/exam/create'),
        cedu_exam_update: iNet.getPUrl('cedu/exam/update'),
        cedu_exam_list: iNet.getPUrl('cedu/exam/list'),
        cedu_exam_delete: iNet.getPUrl('cedu/exam/delete'),
        cedu_exam_result_list: iNet.getPUrl('cedu/exam-result/list'),
        cedu_student_portal_examination_result_list: iNet.getPUrl('cedu/student-portal/examination-result/list'),
        cedu_exam_result_update: iNet.getPUrl('cedu/exam-result/update'),
        cedu_examination_result_update: iNet.getPUrl('cedu/examination-result/update'),

        // REPORTING
        // Report
        cedu_reporting_gender: iNet.getPUrl('cedu/reporting/gender'),
        cedu_reporting_contact_count: iNet.getPUrl('cedu/reporting/contact-count'),
        cedu_class_unit_assignment_replacement_list: iNet.getPUrl('cedu/class-unit-assignment-replacement/list'),

        // SETTINGS
        // Course
        cedu_course_create: iNet.getPUrl('cedu/course/create'),
        cedu_course_update: iNet.getPUrl('cedu/course/update'),
        cedu_course_list: iNet.getPUrl('cedu/course/list'),
        cedu_course_study_subject_update: iNet.getPUrl('cedu/course-study-subject/update'),
        // Course Examination
        cedu_course_examination_list: iNet.getPUrl('cedu/course-examination/list'),
        cedu_course_examination_create: iNet.getPUrl('cedu/course-examination/create'),
        cedu_course_examination_update: iNet.getPUrl('cedu/course-examination/update'),
        cedu_course_examination_delete: iNet.getPUrl('cedu/course-examination/delete'),
        // Course Material Set
        cedu_course_material_set_list: iNet.getPUrl('cedu/course-material-set/list'),
        cedu_course_material_set_create: iNet.getPUrl('cedu/course-material-set/create'),
        cedu_course_material_set_update: iNet.getPUrl('cedu/course-material-set/update'),
        cedu_course_material_set_delete: iNet.getPUrl('cedu/course-material-set/delete'),
        // Program
        cedu_program_create: iNet.getPUrl('cedu/program/create'),
        cedu_program_update: iNet.getPUrl('cedu/program/update'),
        cedu_program_list: iNet.getPUrl('cedu/program/list'),
        // Outlet
        cedu_outlet_create: iNet.getPUrl('cedu/outlet/create'),
        cedu_outlet_update: iNet.getPUrl('cedu/outlet/update'),
        cedu_outlet_list: iNet.getPUrl('cedu/outlet/list'),
        // Source
        cedu_source_create: iNet.getPUrl('cedu/source/create'),
        cedu_source_update: iNet.getPUrl('cedu/source/update'),
        cedu_source_list: iNet.getPUrl('cedu/source/list'),
        // Student Role
        cedu_student_role_create: iNet.getPUrl('cedu/student-role/create'),
        cedu_student_role_update: iNet.getPUrl('cedu/student-role/update'),
        cedu_student_role_list: iNet.getPUrl('cedu/student-role/list'),
        // Unqualified Reason
        cedu_unqualified_reason_create: iNet.getPUrl('cedu/unqualified-reason/create'),
        cedu_unqualified_reason_update: iNet.getPUrl('cedu/unqualified-reason/update'),
        cedu_unqualified_reason_list: iNet.getPUrl('cedu/unqualified-reason/list'),
        // Study Subject
        cedu_study_subject_create: iNet.getPUrl('cedu/study-subject/create'),
        cedu_study_subject_update: iNet.getPUrl('cedu/study-subject/update'),
        cedu_study_subject_list: iNet.getPUrl('cedu/study-subject/list'),
        // Exam Subject
        cedu_exam_subject_create: iNet.getPUrl('cedu/exam-subject/create'),
        cedu_exam_subject_update: iNet.getPUrl('cedu/exam-subject/update'),
        cedu_exam_subject_list: iNet.getPUrl('cedu/exam-subject/list'),
        // Facility
        cedu_facility_create: iNet.getPUrl('cedu/facility/create'),
        cedu_facility_update: iNet.getPUrl('cedu/facility/update'),
        cedu_facility_list: iNet.getPUrl('cedu/facility/list'),
        // Schedule Pattern
        cedu_schedule_pattern_create: iNet.getPUrl('cedu/schedule-pattern/create'),
        cedu_schedule_pattern_update: iNet.getPUrl('cedu/schedule-pattern/update'),
        cedu_schedule_pattern_list: iNet.getPUrl('cedu/schedule-pattern/list'),
        cedu_schedule_pattern_end_date_calculate: iNet.getPUrl('cedu/schedule-pattern/end-date-calculate'),
        // Holiday
        cedu_holiday_create: iNet.getPUrl('cedu/holiday/create'),
        cedu_holiday_update: iNet.getPUrl('cedu/holiday/update'),
        cedu_holiday_delete: iNet.getPUrl('cedu/holiday/delete'),
        cedu_holiday_list: iNet.getPUrl('cedu/holiday/list'),
        // AA Type
        cedu_aa_type_create: iNet.getPUrl('cedu/aa-type/create'),
        cedu_aa_type_update: iNet.getPUrl('cedu/aa-type/update'),
        cedu_aa_type_list: iNet.getPUrl('cedu/aa-type/list'),
        // System Config
        cedu_system_config_create: iNet.getPUrl('cedu/system-config/create'),
        cedu_system_config_update: iNet.getPUrl('cedu/system-config/update'),
        cedu_system_config_list: iNet.getPUrl('cedu/system-config/list'),
        cedu_employee_profile_config_update: iNet.getPUrl('cedu/system-config/employee-profile-config/update'),
        cedu_contact_profile_config_update: iNet.getPUrl('cedu/system-config/contact-profile-config/update'),

        // SYSTEM
        // File
        cedu_file_list: iNet.getPUrl("cedu/file/list"),
        cedu_file_create: iNet.getPUrl("cedu/file/create"),
        cedu_file_delete: iNet.getPUrl("cedu/file/delete"),
        // Document
        cedu_document_list: iNet.getPUrl("cedu/document/list"),
        cedu_document_create: iNet.getPUrl("cedu/document/create"),
        cedu_document_update: iNet.getPUrl("cedu/document/update"),
        cedu_document_delete: iNet.getPUrl("cedu/document/delete"),
        // Comment
        cedu_comment_create: iNet.getPUrl('cedu/comment/create'),
        cedu_comment_update: iNet.getPUrl('cedu/comment/update'),
        cedu_comment_list: iNet.getPUrl('cedu/comment/list'),
        // File Upload/Download
        cedu_sys_cdn_download: iNet.getPUrl("cedu/sys/cdn/file-download"),
        cedu_sys_cdn_upload: iNet.getPUrl("cedu/sys/cdn/file-upload"),
        // Firm Logo
        calista_firm_logo_view: iNet.getPUrl("plugin/firmlogo/view"),
        calista_user_role_list: iNet.getPUrl("system/userrole/list"),
        calista_organization_list: iNet.getPUrl("plugin/organization/list"),
        calista_permision_group_list: iNet.getPUrl("cloud/subfirmrole/group"),
        calista_permision_group_load: iNet.getPUrl("cloud/subfirmrole/groupload"),
        calista_app: iNet.getPUrl("cloud/subfirmrole/variable"),
        // Other
        cedu_sys_help_about: iNet.getPUrl('cedu/sys/help/about/get'),
        cedu_remark_update: iNet.getPUrl("cedu/remark/update"),
    };

    constructor(private http: HttpClientService,) { }

    // CONTACT & STUDENT
    leadCreate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_lead_create, item); }
    leadUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_lead_update, item); }
    leadList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_lead_list, criteria); }
    leadUnqualify(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_lead_unqualify, item); }
    // Student & Contact
    contactCreate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_contact_create, item); }
    contactUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_contact_update, item); }
    contactList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_contact_list, criteria); }
    contactDuplicateCheck(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_contact_duplicate_check, criteria); }
    contactNameUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_contact_name_update, item); }
    // Guardian
    guardianshipCreate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_guardianship_create, item); }
    guardianshipUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_guardianship_update, item); }
    guardianshipList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_guardianship_list, criteria); }

    // EMPLOYEES
    // Employee & Lecture
    employeeCreate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_employee_create, item); }
    employeeUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_employee_update, item); }
    employeeList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_employee_list, criteria); }
    // Employee Permission Profilee
    employeePermissionProfileCreate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_employee_permission_profile_create, item); }
    employeePermissionProfileUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_employee_permission_profile_update, item); }
    employeePermissionProfileList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_employee_permission_profile_list, criteria); }
    // Teaching Unit Summary Doc
    teachingUnitSummaryDocCreate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_teaching_unit_summary_doc_create, item); }
    teachingUnitSummaryDocUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_teaching_unit_summary_doc_update, item); }
    teachingUnitSummaryDocList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_teaching_unit_summary_doc_list, criteria); }
    // Teaching Unit Summary Doc Line
    teachingUnitSummaryDocLineGenerate(docId: string): Observable<any> { return this.http.postJSON(this.url.cedu_teaching_unit_summary_doc_line_generate, { docId: docId }); }
    teachingUnitSummaryDocLineList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_teaching_unit_summary_doc_line_list, criteria); }
    // Checking
    lecturerAttendanceCheck(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_lecturer_attendance_check, criteria); }
    // Study Subject Assignment
    studySubjectAssignmentCreate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_study_subject_assignment_create, item); }
    studySubjectAssignmentList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_study_subject_assignment_list, criteria); }

    // CLASS
    // Class
    classCreate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_create, item); }
    classUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_update, item); }
    classList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_list, criteria); }
    classCancel(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_cancel, criteria); }
    classInfoUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_info_update, item); }
    classEndDateUpdate(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_end_date_update, criteria); }
    classProgressView(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_progress_view, criteria); }
    classStartEndList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_start_end_list, criteria); }
    classRecruitingList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_recruiting_list, criteria); }

    // Class Enrollment
    classEnrollmentCreate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_enrollment_create, item); }
    classEnrollmentUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_enrollment_update, item); }
    classEnrollmentList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_enrollment_list, criteria); }
    classEnrollmentFullList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_enrollment_full_list, criteria); }
    classEnrollmentTransfer(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_enrollment_transfer, item); }
    classEnrollmentDelete(id: string): Observable<any> { return this.http.postJSON(this.url.cedu_class_enrollment_delete, { uuid: id }); }
    classEnrollmentExtendedDelete(criteria): Observable<any> { return this.http.postJSON(this.url.cedu_class_enrollment_delete, criteria); }
    classEnrollmentResignRemarkUpdate(remark: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_enrollment_resign_remark_update, remark); }
    // Class Assignment
    classAssignmentCreate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_assignment_create, item); }
    classAssignmentUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_assignment_update, item); }
    classAssignmentList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_assignment_list, criteria); }
    // Class Study Subject
    classStudySubjectCreate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_study_subject_create, item); }
    classStudySubjectUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_study_subject_update, item); }
    classStudySubjectList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_study_subject_list, criteria); }
    classStudySubjectDelete(id: string): Observable<any> { return this.http.postJSON(this.url.cedu_class_study_subject_delete, { uuid: id }); }
    // Class Unit
    classUnitCreate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_unit_create, item); }
    classUnitUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_unit_update, item); }
    classUnitList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_unit_list, criteria); }
    classUnitSPList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_student_portal_class_unit_list, criteria); }
    classUnitGenerate(id: string): Observable<any> { return this.http.postJSON(this.url.cedu_class_unit_generate, { classId: id }); }
    classUnitRefreshGenerate(params: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_unit_generate, params); }
    classUnitRemoveAll(id: string): Observable<any> { return this.http.postJSON(this.url.cedu_class_unit_remove_all, { classId: id }); }
    classUnitReset(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_unit_reset, criteria); }
    classUnitDelete(id: string): Observable<any> { return this.http.postJSON(this.url.cedu_class_unit_delete, { uuid: id }); }
    classUnitSplit(id: string): Observable<any> { return this.http.postJSON(this.url.cedu_class_unit_split, { classUnitId: id }); }
    classUnitTimeConflictCheck(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_unit_time_conflict_check, criteria); }
    classUnitFacilityMassUpdate(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_unit_facility_mass_update, criteria); }
    classUnitFacilitySearch(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_unit_facility_search, criteria); }
    classUnitBatchRelease(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_unit_batch_release, criteria); }
    classUnitBatchPlan(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_unit_batch_plan, criteria); }
    classUnitAssignmentCopy(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_unit_assignment_copy, criteria); }
    classUnitCheck(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_unit_check, item); }
    classUnitResultUpdate(data: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_unit_result_update, data); }
    // Class Study Lecturer
    classUnitLecturerAttendanceCreate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_unit_lecturer_attendance_create, item); }
    classUnitLecturerAttendanceUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_unit_lecturer_attendance_update, item); }
    classUnitLecturerAttendanceList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_unit_lecturer_attendance_list, criteria); }
    classUnitLecturerAttendanceDelete(id: string, classUnitId: string): Observable<any> { return this.http.postJSON(this.url.cedu_class_unit_lecturer_attendance_delete, { uuid: id, classUnitId: classUnitId }); }
    // Schedule
    classDayScheduleList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_day_schedule_list, criteria); }
    classScheduleBatchAdjust(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_schedule_batch_adjust, criteria); }
    classNoScheduleList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_no_schedule_list, criteria); }
    // Attendance
    classAttendanceDocList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_attendance_doc_list, criteria); }
    classAttendanceRecordList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_attendance_record_list, criteria); }
    classAttendanceRecordCheck(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_attendance_record_check, item); }
    classUnitAttendanceUpdate(data: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_unit_attendance_update, data); }
    classUnitAttendanceRecordList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_unit_attendance_record_list, criteria); }
    classAttendanceDocCreate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_attendance_doc_create, item); }
    classAttendanceDocUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_attendance_doc_update, item); }
    classDateAttendanceRecordList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_date_attendance_record_list, criteria); }
    // Classs Material Set
    classMaterialSetList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_material_set_list, criteria); }
    classMaterialSetCreate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_material_set_create, item); }
    classMaterialSetUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_class_material_set_update, item); }
    classMaterialSetDelete(uuid: string): Observable<any> { return this.http.postJSON(this.url.cedu_class_material_set_delete, {uuid: uuid}); }
     // Student Role Assignment
    studentRoleAssignmentCreate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_student_role_assignment_create, item); }
    studentRoleAssignmentUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_student_role_assignment_update, item); }
    studentRoleAssignmentList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_student_role_assignment_list, criteria); }

    // EXAM
    // Examination
    examinationCreate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_examination_create, item); }
    examinationUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_examination_update, item); }
    examinationList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_examination_list, criteria); }
    examinationResultList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_examination_result_list, criteria); }
    // Exam
    examCreate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_exam_create, item); }
    examUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_exam_update, item); }
    examDelete(uuid: string): Observable<any> { return this.http.postJSON(this.url.cedu_exam_delete, { uuid: uuid }); }
    examList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_exam_list, criteria); }
    examResultList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_exam_result_list, criteria); }
    examResultUpdate(input: any): Observable<any> { return this.http.postJSON(this.url.cedu_exam_result_update, input); }
    examinationResultUpdate(input: any): Observable<any> { return this.http.postJSON(this.url.cedu_examination_result_update, input); }
    examinationResultTotalCalculate(examinationId: string, classId: string): Observable<any> { return this.http.postJSON(this.url.cedu_examination_result_total_calculate, {examinationId: examinationId, classId: classId}); }

    // REPORTING
    // Reporting
    reportingGender(criteria): Observable<any> { return this.http.postJSON(this.url.cedu_reporting_gender, criteria); }
    contactCount(criteria): Observable<any> { return this.http.postJSON(this.url.cedu_reporting_contact_count, criteria); }
    dimGet(dim: string): Observable<any> {
        switch (dim) {
            case "E_OUTLET":
                return this.http.postJSON(this.url.cedu_outlet_list, {});
            case "E_SOURCE":
                return this.http.postJSON(this.url.cedu_source_list, {});
        }
    }
    classUnitAssignmentReplacementList(criteria): Observable<any> { return this.http.postJSON(this.url.cedu_class_unit_assignment_replacement_list, criteria); }

    // SETTINGS
    // Course
    courseCreate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_course_create, item); }
    courseUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_course_update, item); }
    courseList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_course_list, criteria); }
    courseStudySubjectUpdate(uuid: string, str: string): Observable<any> { return this.http.postJSON(this.url.cedu_course_study_subject_update, { uuid: uuid, studySubjectsStr: str }); }
    // Course Examination
    courseExaminationCreate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_course_examination_create, item); }
    courseExaminationUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_course_examination_update, item); }
    courseExaminationList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_course_examination_list, criteria); }
    courseExaminationDelete(uuid: string): Observable<any> { return this.http.postJSON(this.url.cedu_course_examination_delete, { uuid: uuid }); }
    // Course Material Set
    courseMaterialSetCreate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_course_material_set_create, item); }
    courseMaterialSetUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_course_material_set_update, item); }
    courseMaterialSetList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_course_material_set_list, criteria); }
    courseMaterialSetDelete(uuid: string): Observable<any> { return this.http.postJSON(this.url.cedu_course_material_set_delete, { uuid: uuid }); }
    // Program
    programCreate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_program_create, item); }
    programUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_program_update, item); }
    programList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_program_list, criteria); }
    // Outlet
    outletCreate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_outlet_create, item); }
    outletUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_outlet_update, item); }
    outletList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_outlet_list, criteria); }
    // Source
    sourceCreate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_source_create, item); }
    sourceUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_source_update, item); }
    sourceList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_source_list, criteria); }
    // Student Role
    studentRoleCreate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_student_role_create, item); }
    studentRoleUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_student_role_update, item); }
    studentRoleList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_student_role_list, criteria); }
    // Unqualified Reason
    unqualifiedReasonCreate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_unqualified_reason_create, item); }
    unqualifiedReasonUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_unqualified_reason_update, item); }
    unqualifiedReasonList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_unqualified_reason_list, criteria); }
    // Study Subject
    studySubjectCreate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_study_subject_create, item); }
    studySubjectUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_study_subject_update, item); }
    studySubjectList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_study_subject_list, criteria); }
    // Exam Subject
    examSubjectCreate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_exam_subject_create, item); }
    examSubjectUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_exam_subject_update, item); }
    examSubjectList(criteria: any): Observable<any> { return this.http.getJSON(this.url.cedu_exam_subject_list, criteria); }
    // Facility
    facilityCreate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_facility_create, item); }
    facilityUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_facility_update, item); }
    facilityList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_facility_list, criteria); }
    // Schedule Pattern
    schedulePatternCreate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_schedule_pattern_create, item); }
    schedulePatternUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_schedule_pattern_update, item); }
    schedulePatternList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_schedule_pattern_list, criteria); }
    schedulePatternEndDateCalculate(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_schedule_pattern_end_date_calculate, criteria); }
    // Holiday
    holidayCreate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_holiday_create, item); }
    holidayUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_holiday_update, item); }
    holidayDelete(uuid: string): Observable<any> { return this.http.postJSON(this.url.cedu_holiday_delete, { uuid: uuid }); }
    holidayList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_holiday_list, criteria); }
    // AA Type
    aaTypeCreate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_aa_type_create, item); }
    aaTypeUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_aa_type_update, item); }
    aaTypeList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_aa_type_list, criteria); }
    // System Config
    systemConfigCreate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_system_config_create, item); }
    systemConfigUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_system_config_update, item); }
    employeeProfileConfigUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_employee_profile_config_update, item); }
    contactProfileConfigUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_contact_profile_config_update, item); }
    systemConfigList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_system_config_list, criteria); }

    // SYSTEM
    // File
    fileCreate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_file_create, item); }
    fileDelete(id: string): Observable<any> { return this.http.postJSON(this.url.cedu_file_delete, { uuid: id }); }
    fileList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_file_list, criteria); }
    // Doc
    docCreate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_document_create, item); }
    docUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_document_update, item); }
    docDelete(id: string): Observable<any> { return this.http.postJSON(this.url.cedu_document_delete, { uuid: id }); }
    docList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_document_list, criteria); }
    // Comment
    commentCreate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_comment_create, item); }
    commentUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_comment_update, item); }
    commentList(criteria: any): Observable<any> { return this.http.postJSON(this.url.cedu_comment_list, criteria); }
    // Other
    remarkUpdate(item: any): Observable<any> { return this.http.postJSON(this.url.cedu_remark_update, item); }
    getFirmLogo(): Observable<any> { return this.http.postJSON(this.url.calista_firm_logo_view); }
    sysHelpAboutGet(): Observable<any> { return this.http.postJSON(this.url.cedu_sys_help_about); }
}