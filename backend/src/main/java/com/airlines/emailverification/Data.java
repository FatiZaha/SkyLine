package com.airlines.emailverification;

import java.util.List;

public class Data {
    private String status;
    private String result;
    private String _deprecation_notice;
    private int score;
    private String email;
    private boolean regexp;
    private boolean gibberish;
    private boolean disposable;
    private boolean webmail;
    private boolean mx_records;
    private boolean smtp_server;
    private boolean smtp_check;
    private boolean accept_all;
    private boolean block;
    private List<String> sources;

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public String get_deprecation_notice() {
        return _deprecation_notice;
    }

    public void set_deprecation_notice(String _deprecation_notice) {
        this._deprecation_notice = _deprecation_notice;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean isRegexp() {
        return regexp;
    }

    public void setRegexp(boolean regexp) {
        this.regexp = regexp;
    }

    public boolean isGibberish() {
        return gibberish;
    }

    public void setGibberish(boolean gibberish) {
        this.gibberish = gibberish;
    }

    public boolean isDisposable() {
        return disposable;
    }

    public void setDisposable(boolean disposable) {
        this.disposable = disposable;
    }

    public boolean isWebmail() {
        return webmail;
    }

    public void setWebmail(boolean webmail) {
        this.webmail = webmail;
    }

    public boolean isMx_records() {
        return mx_records;
    }

    public void setMx_records(boolean mx_records) {
        this.mx_records = mx_records;
    }

    public boolean isSmtp_server() {
        return smtp_server;
    }

    public void setSmtp_server(boolean smtp_server) {
        this.smtp_server = smtp_server;
    }

    public boolean isSmtp_check() {
        return smtp_check;
    }

    public void setSmtp_check(boolean smtp_check) {
        this.smtp_check = smtp_check;
    }

    public boolean isAccept_all() {
        return accept_all;
    }

    public void setAccept_all(boolean accept_all) {
        this.accept_all = accept_all;
    }

    public boolean isBlock() {
        return block;
    }

    public void setBlock(boolean block) {
        this.block = block;
    }

    public List<String> getSources() {
        return sources;
    }

    public void setSources(List<String> sources) {
        this.sources = sources;
    }

    public Data(String status, String result, String _deprecation_notice, int score, String email, boolean regexp, boolean gibberish, boolean disposable, boolean webmail, boolean mx_records, boolean smtp_server, boolean smtp_check, boolean accept_all, boolean block, List<String> sources) {
        this.status = status;
        this.result = result;
        this._deprecation_notice = _deprecation_notice;
        this.score = score;
        this.email = email;
        this.regexp = regexp;
        this.gibberish = gibberish;
        this.disposable = disposable;
        this.webmail = webmail;
        this.mx_records = mx_records;
        this.smtp_server = smtp_server;
        this.smtp_check = smtp_check;
        this.accept_all = accept_all;
        this.block = block;
        this.sources = sources;
    }
}
