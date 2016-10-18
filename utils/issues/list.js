/**
 * Issues
 *
 * A list of all possible issues organized by
 * issue code and including severity and reason
 * agnostic to file specifics.
 */
module.exports = {
    1: {
        key: 'NOT_INCLUDED',
        severity: 'warning',
        reason: "This file is not part of the BIDS specification, make sure it isn't included in the dataset by accident. Data derivatives (processed data) should be placed in /derivatives folder."
    },
    2: {
        key: 'REPETITION_TIME_GREATER_THAN',
        severity: 'warning',
        reason: "'RepetitionTime' is greater than 100 are you sure it's expressed in seconds?"
    },
    3: {
        key: 'ECHO_TIME_GREATER_THAN',
        severity: 'warning',
        reason: "'EchoTime' is greater than 1 are you sure it's expressed in seconds?"
    },
    4: {
        key: 'ECHO_TIME_DIFFERENCE_GREATER_THAN',
        severity: 'warning',
        reason: "'EchoTimeDifference' is greater than 1 are you sure it's expressed in seconds?"
    },
    5: {
        key: 'TOTAL_READOUT_TIME_GREATER_THAN',
        severity: 'warning',
        reason: "'TotalReadoutTime' is greater than 10 are you sure it's expressed in seconds?"
    },
    6: {
        key: 'ECHO_TIME_NOT_DEFINED',
        severity: 'warning',
        reason:   "You should define 'EchoTime' for this file. If you don't provide this information field map correction will not be possible."
    },
    7: {
        key: 'PHASE_ENCODING_DIRECTION_NOT_DEFINED',
        severity: 'warning',
        reason:   "You should define 'PhaseEncodingDirection' for this file. If you don't provide this information field map correction will not be possible."
    },
    8: {
        key: 'EFFECTIVE_ECHO_SPACING_NOT_DEFINED',
        severity: 'warning',
        reason:   "You should define 'EffectiveEchoSpacing' for this file. If you don't provide this information field map correction will not be possible."
    },
    9: {
        key: 'TOTAL_READOUT_TIME_NOT_DEFINED',
        severity: 'warning',
        reason:   "You should define 'TotalReadoutTime' for this file. If you don't provide this information field map correction using TOPUP might not be possible."
    },
    10: {
        key: 'REPETITION_TIME_MUST_DEFINE',
        severity: 'error',
        reason:   "You have to define 'RepetitionTime' for this file."
    },
    11: {
        key: 'REPETITION_TIME_UNITS',
        severity: 'error',
        reason:   "Repetition time was not defined in seconds, milliseconds or microseconds in the scan's header."
    },
    12: {
        key: 'REPETITION_TIME_MISMATCH',
        severity: 'error',
        reason:   "Repetition time did not match between the scan's header and the associated JSON metadata file."
    },
    13: {
        key: 'SLICE_TIMING_NOT_DEFINED',
        severity: 'warning',
        reason:   "You should define 'SliceTiming' for this file. If you don't provide this information slice time correction will not be possible."
    },
    15: {
        key: 'ECHO_TIME1-2_NOT_DEFINED',
        severity: 'error',
        reason:   "You have to define 'EchoTime1' and 'EchoTime2' for this file."
    },
    16: {
        key: 'ECHO_TIME_MUST_DEFINE',
        severity: 'error',
        reason:   "You have to define 'EchoTime' for this file."
    },
    17: {
        key: 'UNITS_MUST_DEFINE',
        severity: 'error',
        reason:   "You have to define 'Units' for this file."
    },
    18: {
        key: 'PHASE_ENCODING_DIRECTION_MUST_DEFINE',
        severity: 'error',
        reason:   "You have to define 'PhaseEncodingDirection' for this file."
    },
    19: {
        key: 'TOTAL_READOUT_TIME_MUST_DEFINE',
        severity: 'error',
        reason:   "You have to define 'TotalReadoutTime' for this file."
    },
    20: {
        key: 'EVENTS_COLUMN_ONSET',
        severity: 'error',
        reason:   "First column of the events file must be named 'onset'"
    },
    21: {
        key: 'EVENTS_COLUMN_DURATION',
        severity: 'error',
        reason:   "Second column of the events file must be named 'duration'"
    },
    22: {
        key: 'TSV_EQUAL_ROWS',
        severity: 'error',
        reason:   'All rows must have the same number of columns as there are headers.'
    },
    23: {
        key: 'TSV_EMPTY_CELL',
        severity: 'error',
        reason:   'Empty cell in TSV file detected: The proper way of labeling missing values is "n/a".'
    },
    24: {
        key: 'TSV_IMPROPER_NA',
        severity: 'warning',
        reason:   'A proper way of labeling missing values is "n/a".'
    },
    25: {
        key: 'EVENTS_TSV_MISSING',
        severity: 'warning',
        reason:   'Task scans should have a corresponding events.tsv file. If this is a resting state scan you can ignore this warning or rename the task to include the word "rest".'
    },
    26: {
        key: 'NIFTI_HEADER_UNREADABLE',
        severity: 'error',
        reason:   "We were unable to parse header data from this NIfTI file. Please ensure it is not corrupted or mislabeled."
    },
    27: {
        key: 'JSON_INVALID',
        severity: 'error',
        reason: "Not a valid JSON file."
    },
    28: {
        key: 'GZ_NOT_GZIPPED',
        severity: 'error',
        reason: "This file ends in the .gz extension but is not actually gzipped."
    },
    29: {
        key: 'VOLUME_COUNT_MISMATCH',
        severity: 'error',
        reason: "The number of volumes in this scan does not match the number of volumes in the corresponding .bvec and .bval files."
    },
    30: {
        key: 'BVAL_MULTIPLE_ROWS',
        severity: 'error',
        reason: ".bval files should contain exactly one row of volumes."
    },
    31: {
        key: 'BVEC_NUMBER_ROWS',
        severity: 'error',
        reason: ".bvec files should contain exactly three rows of volumes."
    },
    32: {
        key: 'DWI_MISSING_BVEC',
        severity: 'error',
        reason: "DWI scans should have a corresponding .bvec file."
    },
    33: {
        key: 'DWI_MISSING_BVAL',
        severity: 'error',
        reason: "DWI scans should have a corresponding .bval file."
    },
    34: {
        key: 'PHASE_ENCODING_DIRECTION',
        severity: 'error',
        reason: "'PhaseEncodingDirection' needs to be one of 'i', 'i-, 'j', 'j-', 'k', or k-'"
    },
    36: {
        key: 'NIFTI_TOO_SMALL',
        severity: 'error',
        reason: "This file is too small to contain the minimal NIfTI header."
    },
    35: {
        key: 'SLICE_ENCODING_DIRECTION',
        severity: 'error',
        reason: "'SliceEncodingDirection' needs to be one of 'i', 'i-, 'j', 'j-', 'k', or k-'"
    },
    37: {
        key: 'INTENDED_FOR',
        severity: 'error',
        reason: "'IntendedFor' field needs to point to an existing file."
    },
    38: {
        key: 'INCONSISTENT_SUBJECTS',
        severity: 'warning',
        reason: "Not all subjects contain the same files. Each subject should contain the same number of files with " +
        "the same naming unless some files are known to be missing."
    },
    39: {
        key: 'INCONSISTENT_PARAMETERS',
        severity: 'warning',
        reason: "Not all subjects/sessions/runs have the same scanning parameters."
    },
    40: {
        key: 'NIFTI_DIMENSION',
        severity: 'warning',
        reason: "Nifti file's header field for dimension information blank or too short."
    },
    41: {
        key: 'NIFTI_UNIT',
        severity: 'warning',
        reason: "Nifti file's header field for unit information for x, y, z, and t dimensions empty or too short"
    },
    42: {
        key: 'NIFTI_PIXDIM',
        severity: 'warning',
        reason: "Nifti file's header field for pixel dimension information empty or too short."
    },
    43: {
        key: 'ORPHANED_SYMLINK',
        severity: 'error',
        reason: "This file appears to be an orphaned symlink. Make sure it correctly points to its referent."
    },
    44: {
        key: 'FILE_READ',
        severity: 'error',
        reason: "We were unable to read this file. Make sure it is not corrupted, incorectly named or incorectly symlinked."
    },
    45: {
        key: 'SUBJECT_FOLDERS',
        severity: 'error',
        reason: "There are no subject folders (labeled \"sub-*\") in the root of this dataset."
    },
    46: {
        key: 'BVEC_ROW_LENGTH',
        severity: 'error',
        reason: "Each row in a .bvec file should contain the same number of values."
    },
    47: {
        key: 'B_FILE',
        severity: 'error',
        reason: ".bval and .bvec files must be single space delimited and contain only numerical values."
    },
    48: {
        key: 'PARTICIPANT_ID_COLUMN',
        severity: 'error',
        reason:   "A participants file must have a 'participant_id' column."
    },
    49: {
        key: 'PARTICIPANT_ID_MISMATCH',
        severity: 'error',
        reason:   "Subjects found in this dataset did not match the participant_ids found in the participants.tsv file."
    },
    50: {
        key: 'TASK_NAME_MUST_DEFINE',
        severity: 'error',
        reason: "You have to define 'TaskName' for this file."
    },
    51: {
        key: 'NO_T1W',
        severity: 'ignore',
        reason: "Dataset does not contain any T1w scans."
    }
};